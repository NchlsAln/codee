"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.swiftToCsharpRules = void 0;
exports.swiftToCsharp = swiftToCsharp;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("swift", "csharp");
function swiftToCsharp(code) {
    return (0, mapping_helpers_1.translateWithFallback)("swift", "csharp", code);
}
exports.swiftToCsharpRules = rules;
