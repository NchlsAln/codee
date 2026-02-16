"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.phpToKotlinRules = void 0;
exports.phpToKotlin = phpToKotlin;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("php", "kotlin");
function phpToKotlin(code) {
    return (0, mapping_helpers_1.translateWithFallback)("php", "kotlin", code);
}
exports.phpToKotlinRules = rules;
