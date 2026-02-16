"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rustToKotlinRules = void 0;
exports.rustToKotlin = rustToKotlin;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("rust", "kotlin");
function rustToKotlin(code) {
    return (0, mapping_helpers_1.translateWithFallback)("rust", "kotlin", code);
}
exports.rustToKotlinRules = rules;
