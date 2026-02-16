"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.puppetToNimRules = void 0;
exports.puppetToNim = puppetToNim;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("puppet", "nim");
function puppetToNim(code) {
  return (0, mapping_helpers_1.translateWithFallback)("puppet", "nim", code);
}
exports.puppetToNimRules = rules;
