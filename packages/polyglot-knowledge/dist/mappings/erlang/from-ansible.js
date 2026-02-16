"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ansibleToErlangRules = void 0;
exports.ansibleToErlang = ansibleToErlang;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("ansible", "erlang");
function ansibleToErlang(code) {
  return (0, mapping_helpers_1.translateWithFallback)("ansible", "erlang", code);
}
exports.ansibleToErlangRules = rules;
