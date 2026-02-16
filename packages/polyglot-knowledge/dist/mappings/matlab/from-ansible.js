"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ansibleToMatlabRules = void 0;
exports.ansibleToMatlab = ansibleToMatlab;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("ansible", "matlab");
function ansibleToMatlab(code) {
  return (0, mapping_helpers_1.translateWithFallback)("ansible", "matlab", code);
}
exports.ansibleToMatlabRules = rules;
