"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dartToCsharpRules = void 0;
exports.dartToCsharp = dartToCsharp;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("dart", "csharp");
function dartToCsharp(code) {
    return (0, mapping_helpers_1.translateWithFallback)("dart", "csharp", code);
}
exports.dartToCsharpRules = rules;
