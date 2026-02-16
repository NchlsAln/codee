"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nimToCsharpRules = void 0;
exports.nimToCsharp = nimToCsharp;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("nim", "csharp");
function nimToCsharp(code) {
    return (0, mapping_helpers_1.translateWithFallback)("nim", "csharp", code);
}
exports.nimToCsharpRules = rules;
