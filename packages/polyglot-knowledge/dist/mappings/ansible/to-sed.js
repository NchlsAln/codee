"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ansibleToSedRules = void 0;
exports.ansibleToSed = ansibleToSed;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("ansible", "sed");
function ansibleToSed(code) {
  return (0, mapping_helpers_1.translateWithFallback)("ansible", "sed", code);
}
exports.ansibleToSedRules = rules;
