"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.puppetToAwkRules = void 0;
exports.puppetToAwk = puppetToAwk;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("puppet", "awk");
function puppetToAwk(code) {
  return (0, mapping_helpers_1.translateWithFallback)("puppet", "awk", code);
}
exports.puppetToAwkRules = rules;
