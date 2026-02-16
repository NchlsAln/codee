"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cppToKotlinRules = void 0;
exports.cppToKotlin = cppToKotlin;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("cpp", "kotlin");
function cppToKotlin(code) {
    return (0, mapping_helpers_1.translateWithFallback)("cpp", "kotlin", code);
}
exports.cppToKotlinRules = rules;
