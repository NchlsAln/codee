"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chefToHtmlRules = void 0;
exports.chefToHtml = chefToHtml;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("chef", "html");
function chefToHtml(code) {
  return (0, mapping_helpers_1.translateWithFallback)("chef", "html", code);
}
exports.chefToHtmlRules = rules;
