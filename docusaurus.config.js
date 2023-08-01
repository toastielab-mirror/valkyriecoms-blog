// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Valkyriecoms blog',
  tagline: 'What we are up to',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://blog.valkyriecoms.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Valkyriecoms', // Usually your GitHub org/user name.
  projectName: 'valkyrie-blog', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: {
          routeBasePath: '/',
          showReadingTime: true,
          readingTime: ({ content, frontMatter, defaultReadingTime }) =>
            frontMatter.hide_reading_time ? undefined : defaultReadingTime({ content }),
          blogTitle: 'Valkyriecoms blog',
          blogDescription: 'Here you can find out what our team is up to',
          postsPerPage: 'ALL',
          feedOptions: {
            type: 'all',
            copyright: `Copyright © ${new Date().getFullYear()} Dragon's Child Studios`
          },
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
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Valkyriecoms Blog',
        logo: {
          alt: 'Bygul',
          src: 'img/Bygul.png',
        },
        items: [
          {
            href: 'https://toastielab.dev/Valkyriecoms/valkyrie-blog',
            label: 'Toastielab',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.com/invite/y9KtEx7KFx',
              },
              {
                label: 'Mastodon',
                href: 'https://valkyriecoms.com',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Toastielab',
                href: 'https://toastielab.dev/Valkyriecoms/valkyrie-blog',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Dragon's child studios.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
