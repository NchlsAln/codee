"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ansibleToCppRules = void 0;
exports.ansibleToCpp = ansibleToCpp;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("ansible", "cpp");
function ansibleToCpp(code) {
  return (0, mapping_helpers_1.translateWithFallback)("ansible", "cpp", code);
}
exports.ansibleToCppRules = rules;
