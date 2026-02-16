"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.crystalToCsharpRules = void 0;
exports.crystalToCsharp = crystalToCsharp;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("crystal", "csharp");
function crystalToCsharp(code) {
    return (0, mapping_helpers_1.translateWithFallback)("crystal", "csharp", code);
}
exports.crystalToCsharpRules = rules;
