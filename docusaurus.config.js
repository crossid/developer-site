const transformer = require("@crossid/docusaurus-remote-content").transformer;

const regexMdLinks = /\[([^\[]+)\](\(.*?\))/gm;
const singleMatch = /\[([^\[]+)\]\((.*)\)/;
function createRemoteContentTransformer(path) {
  return function remoteContentTransformer(c, data) {
    let td = transformer(c, data);
    const matches = data.match(regexMdLinks);
    for (let i = 0; i < matches.length; i++) {
      let match = singleMatch.exec(matches[i]);
      let link = match[2];

      if (!link.startsWith("http")) {
        let part = link.startsWith("./") ? link.substring(1) : link;
        part = part.startsWith("/") ? part : "/" + part;
        td = td.replace(match[0], `[${match[1]}](${path + part})`);
      }
    }

    return td;
  };
}

module.exports = {
  title: "Developer Hub",
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
      title: "Developer Hub",
      logo: {
        alt: "CrossID Logo",
        src: "img/logot-909x254.png",
      },
      items: [
        {
          href: "https://crossid.io/docs",
          label: "Docs",
          position: "left",
        },
        { href: "https://crossid.io/blog", label: "Blog", position: "left" },
        {
          to: "/api/v1",
          label: "API",
          position: "left",
        },
        {
          href: "https://crossid.io/support",
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
              href: "https://crossid.io/docs",
            },
            {
              label: "Reference",
              to: "/api/v1",
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
              label: "crossid.io",
              href: "https://crossid.io",
            },
            {
              label: "Blog",
              href: "https://crossid.io/blog",
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
              href: "https://crossid.io/company",
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
              sidebar_label: "Node.js",
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
              sidebar_label: "Monorepo",
              hide_title: true,
            },
            transform: createRemoteContentTransformer(
              "https://github.com/crossid/sample-monorepo/tree/main"
            ),
          },
          {
            file: "sample_apps/samples-golang.md",
            url: "https://raw.githubusercontent.com/crossid/samples-golang/main/README.md",
            header: `:::note
This content is from the README file of https://github.com/crossid/samples-golang.
:::`,
            meta: {
              id: "samples-golang",
              sidebar_label: "Golang",
              hide_title: true,
            },
            transform: createRemoteContentTransformer(
              "https://github.com/crossid/samples-golang/tree/main"
            ),
          },
          {
            file: "sample_apps/sample-js.md",
            url: "https://raw.githubusercontent.com/crossid/sample-js/main/README.md",
            header: `:::note
This content is from the README file of https://github.com/crossid/sample-js.
:::`,
            meta: {
              id: "sample-js",
              sidebar_label: "Javascript",
              hide_title: true,
            },
            transform: createRemoteContentTransformer(
              "https://github.com/crossid/sample-js/tree/main"
            ),
          },
          {
            file: "sample_apps/sample-flask.md",
            url: "https://raw.githubusercontent.com/crossid/sample-flask/main/README.md",
            header: `:::note
This content is from the README file of https://github.com/crossid/sample-flask.
:::`,
            meta: {
              id: "sample-flask",
              sidebar_label: "Python Flask",
              hide_title: true,
            },
            transform: createRemoteContentTransformer(
              "https://github.com/crossid/sample-flask/tree/main"
            ),
          },
          {
            file: "sample_apps/sample-django.md",
            url: "https://raw.githubusercontent.com/crossid/sample-django/main/README.md",
            header: `:::note
This content is from the README file of https://github.com/crossid/sample-django.
:::`,
            meta: {
              id: "sample-django",
              sidebar_label: "PHP Dhango",
              hide_title: true,
            },
            transform: createRemoteContentTransformer(
              "https://github.com/crossid/sample-laravel/tree/main"
            ),
          },
          {
            file: "sample_apps/sample-python.md",
            url: "https://raw.githubusercontent.com/crossid/sample-python/main/README.md",
            header: `:::note
This content is from the README file of https://github.com/crossid/sample-python.
:::`,
            meta: {
              id: "sample-python",
              sidebar_label: "Python",
              hide_title: true,
            },
            transform: createRemoteContentTransformer(
              "https://github.com/crossid/sample-python/tree/main"
            ),
          },
          {
            file: "sample_apps/sample-laravel.md",
            url: "https://raw.githubusercontent.com/crossid/sample-laravel/main/README.md",
            header: `:::note
This content is from the README file of https://github.com/crossid/sample-laravel.
:::`,
            meta: {
              id: "sample-laravel",
              sidebar_label: "PHP Laravel",
              hide_title: true,
            },
            transform: createRemoteContentTransformer(
              "https://github.com/crossid/sample-laravel/tree/main"
            ),
          },
          {
            file: "sample_apps/sample-ror.md",
            url: "https://raw.githubusercontent.com/crossid/sample-ror/main/README.md",
            header: `:::note
This content is from the README file of https://github.com/crossid/sample-ror.
:::`,
            meta: {
              id: "sample-ror",
              sidebar_label: "Ruby On Rails",
              hide_title: true,
            },
            transform: createRemoteContentTransformer(
              "https://github.com/crossid/sample-ror/tree/main"
            ),
          },
          {
            file: "sample_apps/sample-ruby.md",
            url: "https://raw.githubusercontent.com/crossid/sample-ruby/main/README.md",
            header: `:::note
This content is from the README file of https://github.com/crossid/sample-ruby.
:::`,
            meta: {
              id: "sample-ruby",
              sidebar_label: "Ruby",
              hide_title: true,
            },
            transform: createRemoteContentTransformer(
              "https://github.com/crossid/sample-ruby/tree/main"
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
    [
      "redocusaurus",
      {
        specs: [
          {
            specUrl: `https://raw.githubusercontent.com/crossid/openapi/spec/openapi.yaml`,
            routePath: "/api/v1/",
          },
        ],
        theme: {
          primaryColor: "#4F46E5",
          redocOptions: { hideDownloadButton: false },
        },
      },
    ],
  ],
};
