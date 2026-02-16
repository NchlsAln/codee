export const yamlEcosystem = {
  fileExtensions: [".yml", ".yaml"],
  paradigms: ["data-serialization"],
  tooling: ["yamllint", "yq"],
  libraries: ["PyYAML", "SnakeYAML", "js-yaml"],
  usage: ["Kubernetes", "CI configs", "Ansible"],
  schemas: ["JSON Schema", "OpenAPI", "Kubernetes"],
  formatting: ["prettier"],
  deploymentTargets: ["config", "infra", "data files"]
};
