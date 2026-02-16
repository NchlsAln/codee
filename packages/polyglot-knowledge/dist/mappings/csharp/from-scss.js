"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scssToCsharpRules = void 0;
exports.scssToCsharp = scssToCsharp;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("scss", "csharp");
function scssToCsharp(code) {
    return (0, mapping_helpers_1.translateWithFallback)("scss", "csharp", code);
}
exports.scssToCsharpRules = rules;
