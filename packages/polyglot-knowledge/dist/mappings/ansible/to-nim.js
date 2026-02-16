"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ansibleToNimRules = void 0;
exports.ansibleToNim = ansibleToNim;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("ansible", "nim");
function ansibleToNim(code) {
  return (0, mapping_helpers_1.translateWithFallback)("ansible", "nim", code);
}
exports.ansibleToNimRules = rules;
