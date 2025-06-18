import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'DieDumb',
  tagline: 'Die Dumb adalah ruang eksperimen pribadi cacing69 aka Ibnul Mutaki. Tempat gagasan mentah diolah tanpa filter, dan kebodohan dirayakan sebagai proses belajar. Baca & tertawalah bersama!',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://cacing69.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'cacing69', // Usually your GitHub org/user name.
  projectName: 'cacing69.github.io', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        sitemap: {
          lastmod: 'date',
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
          createSitemapItems: async (params) => {
            const {defaultCreateSitemapItems, ...rest} = params;
            const items = await defaultCreateSitemapItems(rest);
            return items.filter((item) => !item.url.includes('/page/'));
          },
        },
        gtag: {
          trackingID: 'G-PS5MR3RY0M',
          anonymizeIP: true,
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    metadata: [
      { name: 'keywords', content: 'blog developer, catatan belajar pemrograman, tutorial Linux, dokumentasi kode, workflow programmer, tips coding, DieDumb blog' }, // Kata kunci SEO
      { property: 'og:title', content: 'DieDumb' },
      { property: 'og:description', content: 'Die Dumb adalah ruang eksperimen pribadi cacing69 aka Ibnul Mutaki. Tempat gagasan mentah diolah tanpa filter, dan kebodohan dirayakan sebagai proses belajar. Baca & tertawalah bersama!' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://cacing69.github.io' },
      { property: 'og:image', content: 'https://github.com/cacing69.png' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'DieDumb' },
      { name: 'twitter:description', content: 'Die Dumb adalah ruang eksperimen pribadi cacing69 aka Ibnul Mutaki. Tempat gagasan mentah diolah tanpa filter, dan kebodohan dirayakan sebagai proses belajar. Baca & tertawalah bersama!' },
      { name: 'twitter:image', content: 'https://github.com/cacing69.png' },
      { name: 'google-site-verification', content: 'ilPiLGmLZXF-3yic6A7ZCjCLDqUwy_WQPd6FqrkiThw' },
    ],
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'DieDumb',
      logo: {
        alt: 'DieDumb',
        src: 'img/logo.svg',
      },
      items: [
        { to: '/blog', label: 'Blog', position: 'left' },
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Catatan',
        },
        // { to: '/portofolio', label: 'Portofolio', position: 'right' },
        {
          href: 'https://github.com/cacing69',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      // links: [
      //   {
      //     title: 'Docs',
      //     items: [
      //       {
      //         label: 'Tutorial',
      //         to: '/docs/intro',
      //       },
      //     ],
      //   },
      //   {
      //     title: 'Community',
      //     items: [
      //       {
      //         label: 'Stack Overflow',
      //         href: 'https://stackoverflow.com/questions/tagged/docusaurus',
      //       },
      //       {
      //         label: 'Discord',
      //         href: 'https://discordapp.com/invite/docusaurus',
      //       },
      //       {
      //         label: 'X',
      //         href: 'https://x.com/docusaurus',
      //       },
      //     ],
      //   },
      //   {
      //     title: 'More',
      //     items: [
      //       {
      //         label: 'Blog',
      //         to: '/blog',
      //       },
      //       {
      //         label: 'GitHub',
      //         href: 'https://github.com/facebook/docusaurus',
      //       },
      //     ],
      //   },
      // ],
      copyright: `Copyright © ${new Date().getFullYear()} DieDumb, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
  plugins: []
};

export default config;
