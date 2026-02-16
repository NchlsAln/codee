"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.csharpToKotlinRules = void 0;
exports.csharpToKotlin = csharpToKotlin;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("csharp", "kotlin");
function csharpToKotlin(code) {
    return (0, mapping_helpers_1.translateWithFallback)("csharp", "kotlin", code);
}
exports.csharpToKotlinRules = rules;
