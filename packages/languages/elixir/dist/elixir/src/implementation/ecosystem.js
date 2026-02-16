"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.elixirEcosystem = void 0;
exports.elixirEcosystem = {
    fileExtensions: [".ex", ".exs"],
    paradigms: ["functional"],
    packageManagers: ["Mix", "Hex"],
    buildTools: ["Mix tasks", "Release tooling"],
    testing: ["ExUnit"],
    integrationTesting: ["Wallaby"],
    linting: ["Credo"],
    formatting: ["mix format"],
    typeChecking: ["Dialyzer"],
    docs: ["ExDoc"],
    ciCd: ["GitHub Actions", "GitLab CI"],
    deploymentTargets: ["ECS", "Fly.io", "Kubernetes", "Gigaportal"],
    runtimes: ["BEAM"],
    frameworks: ["Phoenix", "Plug", "LiveView"],
    packageIndex: "Hex.pm",
    observability: ["Telemetry", "OpenTelemetry", "Logger"]
};
