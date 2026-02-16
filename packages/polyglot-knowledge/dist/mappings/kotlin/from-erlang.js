"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.erlangToKotlinRules = void 0;
exports.erlangToKotlin = erlangToKotlin;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("erlang", "kotlin");
function erlangToKotlin(code) {
    return (0, mapping_helpers_1.translateWithFallback)("erlang", "kotlin", code);
}
exports.erlangToKotlinRules = rules;
