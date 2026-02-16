"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.terraformToHtmlRules = void 0;
exports.terraformToHtml = terraformToHtml;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("terraform", "html");
function terraformToHtml(code) {
  return (0, mapping_helpers_1.translateWithFallback)("terraform", "html", code);
}
exports.terraformToHtmlRules = rules;
