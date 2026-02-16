"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.htmlToKotlinRules = void 0;
exports.htmlToKotlin = htmlToKotlin;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("html", "kotlin");
function htmlToKotlin(code) {
    return (0, mapping_helpers_1.translateWithFallback)("html", "kotlin", code);
}
exports.htmlToKotlinRules = rules;
