"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.javaToKotlinRules = void 0;
exports.javaToKotlin = javaToKotlin;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("java", "kotlin");
function javaToKotlin(code) {
    return (0, mapping_helpers_1.translateWithFallback)("java", "kotlin", code);
}
exports.javaToKotlinRules = rules;
