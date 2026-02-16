"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sasToCsharpRules = void 0;
exports.sasToCsharp = sasToCsharp;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("sas", "csharp");
function sasToCsharp(code) {
    return (0, mapping_helpers_1.translateWithFallback)("sas", "csharp", code);
}
exports.sasToCsharpRules = rules;
