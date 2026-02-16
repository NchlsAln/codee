"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.xmlToCsharpRules = void 0;
exports.xmlToCsharp = xmlToCsharp;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("xml", "csharp");
function xmlToCsharp(code) {
    return (0, mapping_helpers_1.translateWithFallback)("xml", "csharp", code);
}
exports.xmlToCsharpRules = rules;
