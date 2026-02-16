"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.javaToCsharpRules = void 0;
exports.javaToCsharp = javaToCsharp;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("java", "csharp");
function javaToCsharp(code) {
    return (0, mapping_helpers_1.translateWithFallback)("java", "csharp", code);
}
exports.javaToCsharpRules = rules;
