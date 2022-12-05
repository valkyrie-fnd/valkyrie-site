// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
const path = require('path');
const fs = require('fs')

/**
 * Add content pages from provider module docs folders. 
 * All .md and .mdx files in the provider module docs folders are used
 */
function getProviderPagesPlugin(excludeDirs) {
  const providerPath = path.resolve('../valkyrie/provider');
  const providerDirs = fs.readdirSync(providerPath, { withFileTypes: true })
    .filter(d => d.isDirectory() && !excludeDirs.includes(d.name));
  return providerDirs.map(pd => {
    return [
      '@docusaurus/plugin-content-pages',
      {
        id: `provider-pages-${pd.name}`,
        path: `../valkyrie/provider/${pd.name}/docs`,
        include: ['./**/*.{md,mdx}'],
        routeBasePath: `/providers/${pd.name}`
      },
    ];
  });
}

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Valkyrie",
  tagline: "Open sourcing gaming",
  url: "https://valkyrie-fnd.github.io/",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  trailingSlash: false,
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "valkyrie-fnd", // Usually your GitHub org/user name.
  projectName: "valkyrie", // Usually your repo name.
  deploymentBranch: "gh-pages",
  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  plugins: [
    [
      "./src/plugins/provider-data-plugin",
      {
        excludeDir: ["internal"],
      },
    ],
    [
      "docusaurus-plugin-openapi-docs",
      {
        id: "apiDocs",
        docsPluginId: "classic",
        config: {
          wallet: {
            specPath: "../valkyrie/pam/pam_api.yml",
            outputDir: "docs/wallet",
          },
          launch: {
            specPath: "../valkyrie/provider/provider_api.yml",
            outputDir: "docs/gamelaunch",
          }
        },
      },
    ],
    ...getProviderPagesPlugin(["internal"]),
  ],
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: "docs",
          routeBasePath: "docs",
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl:
            "https://github.com/valkyrie-fnd/valkyrie-site",
          docLayoutComponent: "@theme/DocPage",
          docItemComponent: "@theme/ApiItem", // Derived from docusaurus-theme-openapi-docs
        },
        blog: {
          blogTitle: "Valkyrie blog!",
          blogDescription: "Info on what's on",
          postsPerPage: "ALL",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        logo: {
          alt: "valkyrie logo",
          src: "img/Valkyrie-green.svg",
        },
        items: [
          {
            label: "ABOUT US",
            to: "/about-us",
            position: "right",
          },
          {
            label: "PROVIDERS",
            to: "/providers",
            position: "right",
          },
          {
            type: "doc",
            docId: "intro",
            position: "right",
            label: "DOCS",
          },
          {
            to: "blog",
            label: "BLOG",
            position: "right",
          },
          {
            href: "https://github.com/valkyrie-fnd",
            label: "GITHUB",
            position: "right",
          },
          {
            type: "html",
            position: "right",
            value: '<img class="menu-logo" width="28" src="/img/Valkyrie-logo-green.svg"/>'
          }
        ],
      },
      footer: {
        copyright: `Copyright © ${new Date().getFullYear()} Valkyrie Foundation. Built with Docusaurus.`,
      },
      colorMode: {
        disableSwitch: true,
      },
    }),
  themes: ["docusaurus-theme-openapi-docs"],
};

module.exports = config;
