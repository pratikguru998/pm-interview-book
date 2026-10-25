// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'PM Interview Book',
  tagline: 'Concepts → Frameworks → Questions. Learn product management visually.',
  favicon: 'img/favicon.ico',
  future: {v4: true},
  // GitHub Pages: https://<user>.github.io/<repo>/  (override locally with BASE_URL=/)
  url: 'https://pratikguru998.github.io',
  baseUrl: process.env.BASE_URL || '/pm-interview-book/',
  organizationName: 'pratikguru998',
  projectName: 'pm-interview-book',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  markdown: {
    mermaid: true,
    hooks: {onBrokenMarkdownLinks: 'throw'},
  },
  themes: [
    '@docusaurus/theme-mermaid',
    [
      '@easyops-cn/docusaurus-search-local',
      {hashed: true, indexBlog: false, docsRouteBasePath: '/docs', highlightSearchTermsOnTargetPage: true},
    ],
  ],
  i18n: {defaultLocale: 'en', locales: ['en']},
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {sidebarPath: './sidebars.js', showLastUpdateTime: false},
        blog: false,
        theme: {customCss: './src/css/custom.css'},
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {respectPrefersColorScheme: true},
      mermaid: {theme: {light: 'default', dark: 'dark'}},
      navbar: {
        title: 'PM Interview Book',
        logo: {alt: 'PM Book', src: 'img/logo.svg'},
        items: [
          {to: '/questions', label: '🔎 Question Finder', position: 'left'},
          {type: 'docSidebar', sidebarId: 'questions', position: 'left', label: '❓ Questions'},
          {type: 'docSidebar', sidebarId: 'concepts', position: 'left', label: '💡 Concepts'},
          {type: 'docSidebar', sidebarId: 'frameworks', position: 'left', label: '🧭 Frameworks'},
          {to: '/docs/start-here', label: '🗺️ Start here', position: 'right'},
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Personal study book · original content · built with Docusaurus`,
      },
      prism: {theme: prismThemes.github, darkTheme: prismThemes.dracula},
    }),
};

export default config;
