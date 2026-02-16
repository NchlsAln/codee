"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.terraformToErlangRules = void 0;
exports.terraformToErlang = terraformToErlang;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("terraform", "erlang");
function terraformToErlang(code) {
  return (0, mapping_helpers_1.translateWithFallback)("terraform", "erlang", code);
}
exports.terraformToErlangRules = rules;
