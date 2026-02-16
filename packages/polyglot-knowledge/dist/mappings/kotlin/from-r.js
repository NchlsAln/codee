"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rToKotlinRules = void 0;
exports.rToKotlin = rToKotlin;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("r", "kotlin");
function rToKotlin(code) {
    return (0, mapping_helpers_1.translateWithFallback)("r", "kotlin", code);
}
exports.rToKotlinRules = rules;
