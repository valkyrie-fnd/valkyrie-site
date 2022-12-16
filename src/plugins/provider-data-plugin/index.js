const yaml = require('yaml');
const fs = require('fs/promises');
const fsSync = require('fs');
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const { Octokit } = require('octokit');
const axios = require("axios");
require('dotenv').config();
/**
 * @typedef {Object} ProviderConf
 * @property {number} id - id of provider
 * @property {string} name - name of provider
 * @property {string} cardImageUrl - url to image used in card
 * @property {string} description - short description of provider
 * @property {string} url - relative url to route to provider
 */
const octokit = new Octokit({ auth: process.env.GH_TOKEN });

async function downloadRecursive(dest, location) {
  const content = await octokit.rest.repos.getContent({
    owner: "four-fingers",
    repo: "valkyrie",
    path: location
  });
  await Promise.all(content.data.map(async dc => {
    if (dc.download_url) {
      const res = await axios.get(dc.download_url, { responseType: 'stream' });

      await fs.writeFile(path.resolve(dest, dc.name), res.data);
    }
    if (dc.type === "dir") {
      const subDir = path.resolve(dest, dc.name);
      if (!fsSync.existsSync(subDir))
        await fs.mkdir(subDir, { recursive: true });
      await downloadRecursive(subDir, dc.path);
    }
  }));
}

/** 
 * Plugin finds config.yml and markdown filers from Provider modules. These are used to build provider pages.
 * 
 * @type {import('@docusaurus/types/src/plugin').PluginModule} 
 */
const providerDataPlugin = async function (context, opts) {
  const { siteDir } = context;
  const excludeDir = opts.excludeDir || [];
  let providerPath = path.resolve(siteDir, '../valkyrie/provider/');
  let providerDirs;
  // if valkyrie exist locally
  if (fsSync.existsSync(providerPath)) {
    providerDirs = (await fs.readdir(providerPath, { withFileTypes: true }))
      .filter(d => d.isDirectory() && !excludeDir.includes(d.name));
  } else {
    // if not create a temp folder and download files from github
    if (!fsSync.existsSync("tmp-provider"))
      await fs.mkdir("tmp-provider");
    const repoContent = await octokit.rest.repos.getContent({
      owner: "four-fingers",
      repo: "valkyrie",
      path: "provider"
    });
    providerPath = path.resolve("tmp-provider");
    providerDirs = repoContent.data.filter(d => d.type === "dir" && !excludeDir.includes(d.name));
    await Promise.all(providerDirs.map(async d => {
      const providerDocsDir = path.resolve("tmp-provider", d.name, "docs");
      if (!fsSync.existsSync(providerDocsDir))
        await fs.mkdir(providerDocsDir, { recursive: true });
      await downloadRecursive(providerDocsDir, `${d.path}/docs`);
    }));
  }
  /** @type {import('@docusaurus/types/src/plugin').Plugin<{providers: ProviderContentData[]>} */
  var plugin = {
    name: 'provider-data-plugin',
    async loadContent() {
      const providerData = await Promise.all(providerDirs.map(async d => {
        try {
          const confFile = await fs.readFile(path.resolve(providerPath, d.name, 'docs', 'config.yml'), 'utf-8');
          /** @type {ProviderConf} */
          const providerConfig = yaml.parse(confFile);
          return providerConfig;
        } catch (e) {
          console.warn('\x1b[43m', '\x1b[31m', `Failed to configure provider: ${d.name}`, '\x1b[0m');
          console.warn('\x1b[43m', '\x1b[31m', `${e}`, '\x1b[0m');
        }
      }));
      return {
        providers: providerData.filter(pd => pd)
      };
    },
    async contentLoaded({ content, actions }) {
      const { setGlobalData } = actions;
      const { providers } = content;
      // add provider config data to global data
      setGlobalData({ providers: providers.map(p => ({ ...p, url: `docs/providers/${p.path}`, cardImageUrl: `${p.path}/${p.cardImage}` })) });
    },
    configureWebpack(config, isServer, utils, content) {
      // Copy images from provider docs/assets folder
      const patterns = [];
      for (const p of content.providers) {
        patterns.push({
          from: path.resolve(providerPath, p.path, 'docs/assets/'),
          to: path.resolve(config.output.path, 'img', p.path),
          force: true,
        })
      }
      return {
        plugins: [
          new CopyPlugin({
            patterns
          }),
        ]
      };
    }
  };
  return plugin;
}

module.exports = providerDataPlugin;
/**
 * @param {Object} contentLoaded
 * @param {ProviderContentData} contentLoaded.content
 * @param {PluginContentLoadedActions} contentLoaded.actions
 */