export const crystalEcosystem = {
  fileExtensions: [".cr"],
  paradigms: ["oop", "functional", "procedural"],
  packageManagers: ["Shards"],
  buildTools: ["crystal", "shards"],
  testing: ["crystal spec"],
  integrationTesting: ["spec with HTTP clients"],
  linting: ["ameba"],
  formatting: ["crystal tool format"],
  typeChecking: ["crystal build", "crystal run"],
  docs: ["crystal docs"],
  ciCd: ["GitHub Actions", "CircleCI"],
  deploymentTargets: ["cli", "services", "containers"],
  runtimes: ["native"],
  frameworks: ["Kemal", "Amber", "Lucky", "Granite"],
  packageIndex: "shards",
  observability: ["Log", "OpenTelemetry adapters"]
};
