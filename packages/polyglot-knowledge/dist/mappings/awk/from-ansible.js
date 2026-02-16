"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ansibleToAwkRules = void 0;
exports.ansibleToAwk = ansibleToAwk;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("ansible", "awk");
function ansibleToAwk(code) {
  return (0, mapping_helpers_1.translateWithFallback)("ansible", "awk", code);
}
exports.ansibleToAwkRules = rules;
