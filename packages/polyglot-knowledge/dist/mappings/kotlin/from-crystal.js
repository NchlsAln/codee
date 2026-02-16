"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.crystalToKotlinRules = void 0;
exports.crystalToKotlin = crystalToKotlin;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("crystal", "kotlin");
function crystalToKotlin(code) {
    return (0, mapping_helpers_1.translateWithFallback)("crystal", "kotlin", code);
}
exports.crystalToKotlinRules = rules;
