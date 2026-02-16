"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.juliaToCsharpRules = void 0;
exports.juliaToCsharp = juliaToCsharp;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("julia", "csharp");
function juliaToCsharp(code) {
    return (0, mapping_helpers_1.translateWithFallback)("julia", "csharp", code);
}
exports.juliaToCsharpRules = rules;
