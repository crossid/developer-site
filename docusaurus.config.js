module.exports = {
  title: "Crossid Developer Hub",
  tagline:
    "Add authentication and authorization to your apps, APIs and devices.",
  url: "https://developer.crossid.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon-32x32.png",
  organizationName: "crossid",
  projectName: "ciddevsite",
  themeConfig: {
    navbar: {
      title: "Developer",
      logo: {
        alt: "CrossID Logo",
        src: "img/logot-909x254.png",
      },
      items: [
        {
          to: "/docs/guides/get-started",
          activeBasePath: "docs",
          label: "Docs",
          position: "left",
        },
        { to: "blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/crossid",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      // https://github.com/facebook/docusaurus/issues/2692
      style: "light",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Get Started",
              to: "docs/guides/get-started",
            },
            {
              label: "Reference",
              to: "docs/reference/api",
            },
          ],
        },
        // {
        //   title: "Community",
        //   items: [
        //     {
        //       label: "Stack Overflow",
        //       href: "https://stackoverflow.com/questions/tagged/crossid",
        //     },
        //     {
        //       label: "Discord",
        //       href: "https://discordapp.com/invite/crossid",
        //     },
        //     {
        //       label: "Twitter",
        //       href: "https://twitter.com/crossidio",
        //     },
        //   ],
        // },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/crossid",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} crossid.io`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl:
            "https://github.com/crossid/developer-site/edit/master/website/",
        },
        blog: {
          showReadingTime: true,
          editUrl:
            "https://github.com/crossid/developer-site/edit/master/website/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
