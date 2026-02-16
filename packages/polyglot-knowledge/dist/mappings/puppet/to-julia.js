"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.puppetToJuliaRules = void 0;
exports.puppetToJulia = puppetToJulia;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("puppet", "julia");
function puppetToJulia(code) {
  return (0, mapping_helpers_1.translateWithFallback)("puppet", "julia", code);
}
exports.puppetToJuliaRules = rules;
