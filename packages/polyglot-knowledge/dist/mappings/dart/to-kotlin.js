"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dartToKotlinRules = void 0;
exports.dartToKotlin = dartToKotlin;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("dart", "kotlin");
function dartToKotlin(code) {
    return (0, mapping_helpers_1.translateWithFallback)("dart", "kotlin", code);
}
exports.dartToKotlinRules = rules;
