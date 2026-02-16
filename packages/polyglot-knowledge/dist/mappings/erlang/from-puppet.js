"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.puppetToErlangRules = void 0;
exports.puppetToErlang = puppetToErlang;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("puppet", "erlang");
function puppetToErlang(code) {
  return (0, mapping_helpers_1.translateWithFallback)("puppet", "erlang", code);
}
exports.puppetToErlangRules = rules;
