"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rustToCsharpRules = void 0;
exports.rustToCsharp = rustToCsharp;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("rust", "csharp");
function rustToCsharp(code) {
    return (0, mapping_helpers_1.translateWithFallback)("rust", "csharp", code);
}
exports.rustToCsharpRules = rules;
