"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ocamlEcosystem = void 0;
exports.ocamlEcosystem = {
    fileExtensions: [
        ".ml",
        ".mli"
    ],
    paradigms: [
        "functional",
        "modular"
    ],
    tooling: ["opam", "dune", "ocamlformat", "ocamllsp", "merlin"],
    frameworks: ["dream", "lwt", "async", "caqti"],
    packageIndex: "opam"
};
