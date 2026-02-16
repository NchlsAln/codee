"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rubyIdioms = void 0;
exports.rubyIdioms = [
    {
        name: "Blocks and procs",
        description: "Prefer blocks for iteration and pass behavior with Procs/Lambdas."
    },
    {
        name: "Symbols",
        description: "Use symbols for identifiers and hash keys."
    },
    {
        name: "Mixins",
        description: "Compose behavior with modules and include/extend."
    },
    {
        name: "DSLs",
        description: "Leverage blocks and methods to build expressive DSLs."
    },
    {
        name: "Monkey patching",
        description: "Be cautious when reopening core classes to add behavior."
    },
    {
        name: "Frozen string literals",
        description: "Enable frozen_string_literal for reduced allocations."
    },
    {
        name: "Enumerables",
        description: "Prefer map/select/reduce over manual loops."
    },
    {
        name: "Keyword arguments",
        description: "Use keyword arguments for clarity in public APIs."
    },
    {
        name: "Errors as exceptions",
        description: "Raise exceptions for exceptional conditions and rescue narrowly."
    },
    {
        name: "Service objects",
        description: "Use small service objects for orchestration and side effects."
    }
];
