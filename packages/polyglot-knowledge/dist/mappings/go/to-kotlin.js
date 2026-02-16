"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.goToKotlinRules = void 0;
exports.goToKotlin = goToKotlin;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("go", "kotlin");
function goToKotlin(code) {
    return (0, mapping_helpers_1.translateWithFallback)("go", "kotlin", code);
}
exports.goToKotlinRules = rules;
