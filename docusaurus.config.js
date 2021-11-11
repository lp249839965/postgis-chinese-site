// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'PostGIS中文用户手册',
  tagline: '基于PostGIS官方手册的中文说明与应用注解图文示例',
  url: 'https://github.com/FreeGIS/postgis-chinese-site',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'FreeGIS', // Usually your GitHub org/user name.
  projectName: 'postgis-chinese-site', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/FreeGIS/postgis-chinese-site',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/main/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // 标题
      navbar: {
        title: 'PostGIS中文用户手册',
        logo: {
          alt: 'PostGISChineseDoc Logo',
          src: 'img/postgis-logo.png',
        },
        items: [
          {
            label: '文档',
            position: 'left',
            to: 'docs/intro',
            activeBasePath: 'docs',
            activeBaseRegex: 'docs/(documentation|intro)',
          },
          {
            label: 'Tutorials',
            position: 'left',
            to: 'docs/examples/base',
            activeBasePath: 'docs',
            activeBaseRegex: 'docs/(examples)',
          },
          {to: '/blog', label: '博客', position: 'left'},
          {
            href: 'https://github.com/FreeGIS/postgis-chinese-site',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} PostgisChineseDoc, Inc. Built with FreeGIS.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
