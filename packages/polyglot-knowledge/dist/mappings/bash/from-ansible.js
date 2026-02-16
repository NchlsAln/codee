"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ansibleToBashRules = void 0;
exports.ansibleToBash = ansibleToBash;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("ansible", "bash");
function ansibleToBash(code) {
  return (0, mapping_helpers_1.translateWithFallback)("ansible", "bash", code);
}
exports.ansibleToBashRules = rules;
