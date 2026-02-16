"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.puppetToScssRules = void 0;
exports.puppetToScss = puppetToScss;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("puppet", "scss");
function puppetToScss(code) {
  return (0, mapping_helpers_1.translateWithFallback)("puppet", "scss", code);
}
exports.puppetToScssRules = rules;
