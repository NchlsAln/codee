"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scalaToKotlinRules = void 0;
exports.scalaToKotlin = scalaToKotlin;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("scala", "kotlin");
function scalaToKotlin(code) {
    return (0, mapping_helpers_1.translateWithFallback)("scala", "kotlin", code);
}
exports.scalaToKotlinRules = rules;
