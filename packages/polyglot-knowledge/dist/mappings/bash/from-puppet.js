"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.puppetToBashRules = void 0;
exports.puppetToBash = puppetToBash;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("puppet", "bash");
function puppetToBash(code) {
  return (0, mapping_helpers_1.translateWithFallback)("puppet", "bash", code);
}
exports.puppetToBashRules = rules;
