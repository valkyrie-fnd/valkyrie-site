const yaml = require('yaml');
const path = require('path');
const fs = require('fs')
const chalk = require('chalk');
const mustache = require('mustache');
/**
 * Plugin adding cli command `gen-provider-docs`, adding provider specific docs to site docs folder structure
 */
function providerDocsPlugin(context, options) {
  return {
    name: "provider-docs-plugin",
    extendCli(cli) {
      cli.command("gen-provider-docs")
        .description("Generate doc files for all providers. ")
        .action(async () => {
          const providerPath = path.resolve('../valkyrie/provider');
          if (!fs.existsSync(providerPath)) {
            console.error(chalk.red(`valkyrie is needed to generate provider docs`));
            return;
          }
          const defaultFileNames = ["index.md", "index.mdx"];
          const template =
            `---
title: "{{{title}}}"
id: "{{{id}}}"
---

{{{markdown}}}`;
          // Find all provider modules in valkyrie, excluding any in options.excludeDirs
          const providerDirs = fs.readdirSync(providerPath, { withFileTypes: true })
            .filter(d => d.isDirectory() && !options.excludeDirs.includes(d.name));
          const providerDir = "docs/providers"
          providerDirs.forEach(pd => {
            const providerDocsPath = path.resolve(providerPath, `${pd.name}/docs`);
            const includeRegex = new RegExp(options.include)
            // read all files in provider /docs-folder that match options.include regex
            const providerDocs = fs.readdirSync(providerDocsPath, { withFileTypes: true })
              .filter((d) => !d.isDirectory() && includeRegex.test(d.name))
            const outputDir = `${providerDir}/${pd.name}`;
            if (!fs.existsSync(outputDir)) {
              try {
                fs.mkdirSync(outputDir, { recursive: true });
                console.log(chalk.green(`Successfully created "${outputDir}"`));
              } catch (err) {
                console.error(
                  chalk.red(`Failed to create "${outputDir}"`),
                  chalk.yellow(err)
                );
              }
            }
            // copy all files to new folders in docs hierarchy
            providerDocs.forEach(doc => {
              const docContent = fs.readFileSync(path.resolve(providerDocsPath, doc.name));
              const confFile = fs.readFileSync(path.resolve(providerDocsPath, 'config.yml'), 'utf-8');
              const providerConfig = yaml.parse(confFile);
              let title = defaultFileNames.includes(doc.name) ?
                providerConfig.name :
                doc.name.split(".").reduce((acc, cur, curI, arr) => {
                  if (curI === arr.length - 1) {
                    // remove "-"
                    return acc.substring(0, acc.length - 1);
                  }
                  return `${acc}${cur}-`
                }, "");
              const id = !defaultFileNames.includes(doc.name) ? `${pd.name}-${title}` : `${pd.name}-index`;
              title = title[0].toUpperCase() + title.substring(1);
              const output = mustache.render(template, { title, id, markdown: docContent });
              fs.writeFileSync(path.resolve(outputDir, doc.name), output)
            });
          });
        });
    }
  }
}

module.exports = providerDocsPlugin;