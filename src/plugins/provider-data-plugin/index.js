const yaml = require('yaml');
const fs = require('fs/promises');
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
/**
 * @typedef {Object} ProviderConf
 * @property {number} id - id of provider
 * @property {string} name - name of provider
 * @property {string} cardImageUrl - url to image used in card
 * @property {string} description - short description of provider
 * @property {string} url - relative url to route to provider
 */

/** 
 * Plugin finds config.yml and markdown filers from Provider modules. These are used to build provider pages.
 * 
 * @type {import('@docusaurus/types/src/plugin').PluginModule} 
 */
const providerDataPlugin = async function(context, opts) {
  const { siteDir } = context;
  const excludeDir = opts.excludeDir || [];
  const providerPath = path.resolve(siteDir, '../valkyrie/provider/');
  const providerDirs = (await fs.readdir(providerPath, { withFileTypes: true }))
    .filter(d => d.isDirectory() && !excludeDir.includes(d.name));

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
      setGlobalData({ providers: providers.map(p => ({ ...p, url: `providers/${p.path}`, cardImageUrl: `${p.path}/${p.cardImage}` })) });
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