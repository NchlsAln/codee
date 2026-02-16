"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.matlabToKotlinRules = void 0;
exports.matlabToKotlin = matlabToKotlin;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("matlab", "kotlin");
function matlabToKotlin(code) {
    return (0, mapping_helpers_1.translateWithFallback)("matlab", "kotlin", code);
}
exports.matlabToKotlinRules = rules;
