"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bashToKotlinRules = void 0;
exports.bashToKotlin = bashToKotlin;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("bash", "kotlin");
function bashToKotlin(code) {
    return (0, mapping_helpers_1.translateWithFallback)("bash", "kotlin", code);
}
exports.bashToKotlinRules = rules;
