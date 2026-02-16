"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rubyToCsharpRules = void 0;
exports.rubyToCsharp = rubyToCsharp;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("ruby", "csharp");
function rubyToCsharp(code) {
    return (0, mapping_helpers_1.translateWithFallback)("ruby", "csharp", code);
}
exports.rubyToCsharpRules = rules;
