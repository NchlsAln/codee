"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.zigToCsharpRules = void 0;
exports.zigToCsharp = zigToCsharp;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("zig", "csharp");
function zigToCsharp(code) {
    return (0, mapping_helpers_1.translateWithFallback)("zig", "csharp", code);
}
exports.zigToCsharpRules = rules;
