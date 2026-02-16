"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.puppetToPhpRules = void 0;
exports.puppetToPhp = puppetToPhp;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("puppet", "php");
function puppetToPhp(code) {
  return (0, mapping_helpers_1.translateWithFallback)("puppet", "php", code);
}
exports.puppetToPhpRules = rules;
