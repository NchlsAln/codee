"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ansibleToRRules = void 0;
exports.ansibleToR = ansibleToR;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("ansible", "r");
function ansibleToR(code) {
  return (0, mapping_helpers_1.translateWithFallback)("ansible", "r", code);
}
exports.ansibleToRRules = rules;
