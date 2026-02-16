"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.haskellToCsharpRules = void 0;
exports.haskellToCsharp = haskellToCsharp;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("haskell", "csharp");
function haskellToCsharp(code) {
    return (0, mapping_helpers_1.translateWithFallback)("haskell", "csharp", code);
}
exports.haskellToCsharpRules = rules;
