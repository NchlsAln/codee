"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.puppetToCppRules = void 0;
exports.puppetToCpp = puppetToCpp;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("puppet", "cpp");
function puppetToCpp(code) {
  return (0, mapping_helpers_1.translateWithFallback)("puppet", "cpp", code);
}
exports.puppetToCppRules = rules;
