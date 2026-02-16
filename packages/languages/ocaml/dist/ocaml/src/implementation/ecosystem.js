"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ocamlEcosystem = void 0;
exports.ocamlEcosystem = {
    fileExtensions: [".ml", ".mli"],
    paradigms: ["functional", "modular"],
    packageManagers: ["opam"],
    buildTools: ["dune"],
    testing: ["alcotest", "ounit"],
    integrationTesting: ["dream", "cohttp"],
    linting: ["ocaml-lsp diagnostics"],
    formatting: ["ocamlformat"],
    typeChecking: ["dune build", "ocamlc"],
    docs: ["odoc"],
    ciCd: ["GitHub Actions", "GitLab CI"],
    deploymentTargets: ["cli", "services", "native libraries"],
    runtimes: ["native", "bytecode"],
    frameworks: ["Dream", "Lwt", "Async", "Caqti"],
    packageIndex: "opam",
    observability: ["logs", "metrics via prometheus libraries"]
};
