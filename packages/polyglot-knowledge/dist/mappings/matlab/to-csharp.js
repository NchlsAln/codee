"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.matlabToCsharpRules = void 0;
exports.matlabToCsharp = matlabToCsharp;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("matlab", "csharp");
function matlabToCsharp(code) {
    return (0, mapping_helpers_1.translateWithFallback)("matlab", "csharp", code);
}
exports.matlabToCsharpRules = rules;
