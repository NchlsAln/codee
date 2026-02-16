"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.phpToCsharpRules = void 0;
exports.phpToCsharp = phpToCsharp;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("php", "csharp");
function phpToCsharp(code) {
    return (0, mapping_helpers_1.translateWithFallback)("php", "csharp", code);
}
exports.phpToCsharpRules = rules;
