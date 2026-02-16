"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jsonToCsharpRules = void 0;
exports.jsonToCsharp = jsonToCsharp;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("json", "csharp");
function jsonToCsharp(code) {
    return (0, mapping_helpers_1.translateWithFallback)("json", "csharp", code);
}
exports.jsonToCsharpRules = rules;
