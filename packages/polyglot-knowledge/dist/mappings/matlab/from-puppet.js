"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.puppetToMatlabRules = void 0;
exports.puppetToMatlab = puppetToMatlab;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("puppet", "matlab");
function puppetToMatlab(code) {
  return (0, mapping_helpers_1.translateWithFallback)("puppet", "matlab", code);
}
exports.puppetToMatlabRules = rules;
