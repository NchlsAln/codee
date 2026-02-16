"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scssToKotlinRules = void 0;
exports.scssToKotlin = scssToKotlin;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("scss", "kotlin");
function scssToKotlin(code) {
    return (0, mapping_helpers_1.translateWithFallback)("scss", "kotlin", code);
}
exports.scssToKotlinRules = rules;
