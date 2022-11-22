// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
const path = require('path');
const fs = require('fs')
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

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
    // Docs plugin for wallet api doc
    [
      '@docusaurus/plugin-content-docs',
      {
        id: "walletApi",
        path: "api/wallet",
        routeBasePath: "wallet",
        sidebarPath: require.resolve("./sidebars.js"),
        docLayoutComponent: "@theme/DocPage",
        docItemComponent: "@theme/ApiItem", // Derived from docusaurus-theme-openapi-docs
      },
    ],
    // Docs plugin for launch api doc
    [
      '@docusaurus/plugin-content-docs',
      {
        id: "launchApi",
        path: "api/launch",
        routeBasePath: "launch",
        sidebarPath: require.resolve("./sidebars.js"),
        docLayoutComponent: "@theme/DocPage",
        docItemComponent: "@theme/ApiItem", // Derived from docusaurus-theme-openapi-docs
      },
    ],
    [
      "docusaurus-plugin-openapi-docs",
      {
        id: "walletApiDocs",
        docsPluginId: "walletApi",
        config: {
          wallet: {
            specPath: "../valkyrie/pam/pam_api.yml",
            outputDir: "api/wallet",
          },
        },
      },
    ],
    [
      "docusaurus-plugin-openapi-docs",
      {
        id: "launchApiDocs",
        docsPluginId: "launchApi",
        config: {
          launch: {
            specPath: "../valkyrie/provider/provider_api.yml",
            outputDir: "api/launch",
          },
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
        title: "Valkyrie",
        logo: {
          alt: "valkyrie logo",
          src: "img/down.svg",
        },
        items: [
          {
            label: "PROVIDERS",
            to: "/providers",
            position: "right",
          },
          {
            type: "doc",
            docId: "valkyrie-pam-api",
            position: "right",
            label: "WALLETS",
            docsPluginId: "walletApi",
          },
          {
            label: "LAUNCH",
            type: "doc",
            docId: "valkyrie-provider-endpoints",
            position: "right",
            docsPluginId: "launchApi",
          },
          {
            to: "blog",
            label: "BLOG",
            position: "right",
          },
          {
            type: "doc",
            docId: "intro",
            position: "right",
            label: "DOCS",
          },
          {
            href: "https://github.com/valkyrie-fnd",
            label: "GITHUB",
            position: "right",
          },
        ],
      },
      footer: {
        // links: [
        //   {
        //     items: [
        //       {
        //         label: "Home",
        //         to: "/",
        //       },
        //       {
        //         label: "Providers",
        //         to: "/providers",
        //       },
        //       {
        //         label: "Wallets",
        //         to: "/wallets",
        //       },
        //       {
        //         label: "Launch",
        //         to: "/launch",
        //       },
        //       {
        //         label: "Blog",
        //         to: "/blog",
        //       },
        //       {
        //         label: "Docs",
        //         to: "/docs",
        //       },
        //     ],
        //   },
        // ],
        copyright: `Copyright © ${new Date().getFullYear()} Valkyrie Foundation. Built with Docusaurus.`,
      },
      colorMode: {
        disableSwitch: true,
      },
    }),
  themes: ["docusaurus-theme-openapi-docs"],
};

module.exports = config;
