"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rubyToKotlinRules = void 0;
exports.rubyToKotlin = rubyToKotlin;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("ruby", "kotlin");
function rubyToKotlin(code) {
    return (0, mapping_helpers_1.translateWithFallback)("ruby", "kotlin", code);
}
exports.rubyToKotlinRules = rules;
