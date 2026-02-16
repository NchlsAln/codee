"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.puppetToSedRules = void 0;
exports.puppetToSed = puppetToSed;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("puppet", "sed");
function puppetToSed(code) {
  return (0, mapping_helpers_1.translateWithFallback)("puppet", "sed", code);
}
exports.puppetToSedRules = rules;
