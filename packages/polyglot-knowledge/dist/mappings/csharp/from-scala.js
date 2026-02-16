"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scalaToCsharpRules = void 0;
exports.scalaToCsharp = scalaToCsharp;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("scala", "csharp");
function scalaToCsharp(code) {
    return (0, mapping_helpers_1.translateWithFallback)("scala", "csharp", code);
}
exports.scalaToCsharpRules = rules;
