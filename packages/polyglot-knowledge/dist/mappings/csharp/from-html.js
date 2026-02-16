"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.htmlToCsharpRules = void 0;
exports.htmlToCsharp = htmlToCsharp;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("html", "csharp");
function htmlToCsharp(code) {
    return (0, mapping_helpers_1.translateWithFallback)("html", "csharp", code);
}
exports.htmlToCsharpRules = rules;
