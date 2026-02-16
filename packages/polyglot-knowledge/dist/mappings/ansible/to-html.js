"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ansibleToHtmlRules = void 0;
exports.ansibleToHtml = ansibleToHtml;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("ansible", "html");
function ansibleToHtml(code) {
  return (0, mapping_helpers_1.translateWithFallback)("ansible", "html", code);
}
exports.ansibleToHtmlRules = rules;
