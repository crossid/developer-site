module.exports = {
  someSidebar: {
    Guides: [
      {
        "Get Started": [
          "guides/get_started/preface",
          "guides/get_started/signup",
          "guides/get_started/add_user",
          "guides/get_started/add_app",
          "guides/get_started/try_login",
          "guides/get_started/recap",
        ],
      },
    ],
    Concepts: ["concepts/application"],
    Languages: [
      "langs/overview",
      { Backend: ["langs/backend/nodejs_express"] },
    ],
    Reference: [
      {
        RestAPI: [
          "reference/api/preface",
          "reference/api/api-overview",
          "reference/api/apps",
          "reference/api/resources",
          "reference/api/resource-types",
          "reference/api/rules",
          "reference/api/filters",
          "reference/api/audit",
          "reference/api/flows",
          "reference/api/insights",
          "reference/api/jobs",
          "reference/api/schemas",
          "reference/api/mappers",
          "reference/api/secrets",
          {
            Auth: [
              "reference/api/api-tokens",
              "reference/api/sessions",
              "reference/api/auth-errors",
            ],
          },
          "reference/api/changes",
          "reference/api/health",
          "reference/api/api-schemas",
        ],
      },
    ],
  },
};
