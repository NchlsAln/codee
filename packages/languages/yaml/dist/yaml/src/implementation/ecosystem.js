"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.yamlEcosystem = void 0;
exports.yamlEcosystem = {
    fileExtensions: [".yml", ".yaml"],
    paradigms: ["data-serialization"],
    tooling: ["yamllint", "yq"],
    libraries: ["PyYAML", "SnakeYAML", "js-yaml"],
    usage: ["Kubernetes", "CI configs", "Ansible"],
    schemas: ["JSON Schema", "OpenAPI", "Kubernetes"],
    formatting: ["prettier"],
    deploymentTargets: ["config", "infra", "data files"]
};
