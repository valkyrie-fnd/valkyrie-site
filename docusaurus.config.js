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
    ...getProviderPagesPlugin(["internal"]),
  ],
  presets: [
    [
      // redoc plugin for displaying the OAPI specs
      "redocusaurus",
      {
        specs: [
          {
            spec: "../valkyrie/pam/pam_api.yml",
            route: "/wallets",
          },
          {
            spec: "../valkyrie/provider/provider_api.yml",
            route: "/launch",
          },
        ],
      },
    ],
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/docs",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
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
            label: "Providers",
            to: "/providers",
          },
          {
            label: "Wallets",
            to: "/wallets",
          },
          {
            label: "Launch",
            to: "/launch",
          },
          {
            to: "blog",
            position: "left",
            label: "Blog",
          },
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Docs",
          },
          {
            href: "https://github.com/valkyrie-fnd",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            items: [
              {
                label: "Home",
                to: "/",
              },
              {
                label: "Providers",
                to: "/providers",
              },
              {
                label: "Wallets",
                to: "/wallets",
              },
              {
                label: "Launch",
                to: "/launch",
              },
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "Docs",
                to: "/docs",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Valkyrie, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
