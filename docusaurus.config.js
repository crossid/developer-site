const transformer = require("@crossid/docusaurus-remote-content").transformer;

function createRemoteContentTransformer(path) {
  return function remoteContentTransformer(c, data) {
    const d = transformer(c, data);
    return d.replace(/(\(\.\/(.*?)\))/gi, `(${path}/$2)`);
  };
}

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
    prism: {
      additionalLanguages: ["go"],
    },
    navbar: {
      hideOnScroll: true,
      title: "Crossid Developer Hub",
      logo: {
        alt: "CrossID Logo",
        src: "img/logot-909x254.png",
      },
      items: [
        {
          type: "doc",
          docId: "guides/get_started/preface",
          label: "Docs",
          position: "left",
        },
        {
          type: "doc",
          docId: "reference/api/api-overview",
          label: "API",
          position: "left",
        },
        { to: "blog", label: "Blog", position: "left" },
        {
          to: "/support",
          label: "Support",
          position: "right",
        },
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
              label: "Crossid Website",
              href: "https://crossid.io",
            },
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
        {
          title: "Company",
          items: [
            {
              label: "Contact",
              href: "https://crossid.io/contact",
            },
            {
              label: "About",
              href: "https://www.crossid.io/company",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} crossid.io`,
    },
    googleAnalytics: {
      trackingID: "UA-157001541-2",
      // Optional fields.
      anonymizeIP: true, // Should IPs be anonymized?
    },
  },
  plugins: [
    [
      "@crossid/docusaurus-remote-content",
      {
        type: "docs",
        cleanup: true,
        contents: [
          {
            file: "sample_apps/sample-nodejs.md",
            url: "https://raw.githubusercontent.com/crossid/sample-nodejs/main/README.md",
            header: `:::note
This content is from the README file of https://github.com/crossid/sample-nodejs.
:::`,
            meta: {
              id: "sample-nodejs",
              sidebar_label: "Sample-Nodejs",
              hide_title: true,
            },
            transform: createRemoteContentTransformer(
              "https://github.com/crossid/sample-nodejs/tree/main"
            ),
          },
          {
            file: "sample_apps/sample-monorepo.md",
            url: "https://raw.githubusercontent.com/crossid/sample-monorepo/main/README.md",
            header: `:::note
This content is from the README file of https://github.com/crossid/sample-monorepo.
:::`,
            meta: {
              id: "sample-monorepo",
              sidebar_label: "Sample-Monorepo",
              hide_title: true,
            },
            transform: createRemoteContentTransformer(
              "https://github.com/crossid/sample-monorepo/tree/main"
            ),
          },
        ],
      },
    ],
  ],
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl:
            "https://github.com/crossid/developer-site/edit/master/website/",
          remarkPlugins: [
            [require("mdx-mermaid"), { mermaid: { theme: "neutral" } }],
          ],
        },
        blog: {
          showReadingTime: true,
          editUrl:
            "https://github.com/crossid/developer-site/edit/master/website/blog/",
          remarkPlugins: [
            [require("mdx-mermaid"), { mermaid: { theme: "neutral" } }],
          ],
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
