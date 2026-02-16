"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sasToKotlinRules = void 0;
exports.sasToKotlin = sasToKotlin;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("sas", "kotlin");
function sasToKotlin(code) {
    return (0, mapping_helpers_1.translateWithFallback)("sas", "kotlin", code);
}
exports.sasToKotlinRules = rules;
