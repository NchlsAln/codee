"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cssToKotlinRules = void 0;
exports.cssToKotlin = cssToKotlin;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("css", "kotlin");
function cssToKotlin(code) {
    return (0, mapping_helpers_1.translateWithFallback)("css", "kotlin", code);
}
exports.cssToKotlinRules = rules;
