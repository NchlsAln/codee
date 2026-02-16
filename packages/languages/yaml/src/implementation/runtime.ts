export const yamlRuntime = {
  name: "YAML parser",
  supportedVersions: ["YAML 1.2"],
  processingModel: {
    parser: "Indentation-sensitive parsing with anchors and aliases",
    schema: "Core schema with implicit typing",
    resolution: "Merge keys and anchors resolved during parse"
  },
  performance: {
    notes: ["Validate indentation", "Avoid deep anchor chains", "Prefer explicit types"]
  },
  tooling: {
    parsers: ["libyaml", "js-yaml"],
    linters: ["yamllint"],
    schema: ["Kubernetes", "OpenAPI"]
  }
};
