"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.puppetToHtmlRules = void 0;
exports.puppetToHtml = puppetToHtml;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("puppet", "html");
function puppetToHtml(code) {
  return (0, mapping_helpers_1.translateWithFallback)("puppet", "html", code);
}
exports.puppetToHtmlRules = rules;
