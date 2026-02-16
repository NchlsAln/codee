"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.puppetToCssRules = void 0;
exports.puppetToCss = puppetToCss;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("puppet", "css");
function puppetToCss(code) {
  return (0, mapping_helpers_1.translateWithFallback)("puppet", "css", code);
}
exports.puppetToCssRules = rules;
