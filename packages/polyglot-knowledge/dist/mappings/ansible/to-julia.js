"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ansibleToJuliaRules = void 0;
exports.ansibleToJulia = ansibleToJulia;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("ansible", "julia");
function ansibleToJulia(code) {
  return (0, mapping_helpers_1.translateWithFallback)("ansible", "julia", code);
}
exports.ansibleToJuliaRules = rules;
