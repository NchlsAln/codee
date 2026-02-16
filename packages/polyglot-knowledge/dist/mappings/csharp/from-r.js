"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rToCsharpRules = void 0;
exports.rToCsharp = rToCsharp;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("r", "csharp");
function rToCsharp(code) {
    return (0, mapping_helpers_1.translateWithFallback)("r", "csharp", code);
}
exports.rToCsharpRules = rules;
