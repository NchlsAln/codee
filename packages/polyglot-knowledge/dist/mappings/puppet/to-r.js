"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.puppetToRRules = void 0;
exports.puppetToR = puppetToR;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("puppet", "r");
function puppetToR(code) {
  return (0, mapping_helpers_1.translateWithFallback)("puppet", "r", code);
}
exports.puppetToRRules = rules;
