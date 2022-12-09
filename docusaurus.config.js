require('dotenv').config();
// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Valkyrie",
  tagline: "Open sourcing gaming",
  url: "https://valkyrie-fnd.github.io/",
  baseUrl: process.env.VALK_BASE_URL,
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
      "./src/plugins/provider-docs-plugin",
      {
        id: 'provider-docs-plugin',
        include: ".*\\.(mdx|md)$",
        excludeDirs: ["internal", "docs"],
      }
    ],
    [
      "./src/plugins/provider-data-plugin",
      {
        id: "provider-data-plugin",
        excludeDir: ["internal", "docs"],
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
            value: '<img class="menu-logo" width="28" src="img/Valkyrie-logo-green.svg"/>'
          }
        ],
      },
      metadata: [{ name: "robots", content: "noindex" }],
      footer: {
        copyright: `Copyright © ${new Date().getFullYear()} Valkyrie fnd. Built with Docusaurus.`,
      },
      colorMode: {
        disableSwitch: true,
      },
    }),
  stylesheets: [
    "https://fonts.googleapis.com/css2?family=Bai+Jamjuree"
  ],
  themes: ["docusaurus-theme-openapi-docs"],
};

module.exports = config;
