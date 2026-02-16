"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.awkToCsharpRules = void 0;
exports.awkToCsharp = awkToCsharp;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("awk", "csharp");
function awkToCsharp(code) {
    return (0, mapping_helpers_1.translateWithFallback)("awk", "csharp", code);
}
exports.awkToCsharpRules = rules;
