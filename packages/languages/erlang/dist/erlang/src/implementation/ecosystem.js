"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.erlangEcosystem = void 0;
exports.erlangEcosystem = {
    fileExtensions: [
        ".erl",
        ".hrl"
    ],
    paradigms: [
        "functional",
        "procedural"
    ],
    tooling: ["rebar3", "hex", "dialyzer", "eunit"],
    frameworks: ["cowboy", "webmachine", "nitrogen"],
    packageIndex: "hex.pm"
};
