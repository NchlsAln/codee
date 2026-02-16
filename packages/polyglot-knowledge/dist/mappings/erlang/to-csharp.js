"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.erlangToCsharpRules = void 0;
exports.erlangToCsharp = erlangToCsharp;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("erlang", "csharp");
function erlangToCsharp(code) {
    return (0, mapping_helpers_1.translateWithFallback)("erlang", "csharp", code);
}
exports.erlangToCsharpRules = rules;
