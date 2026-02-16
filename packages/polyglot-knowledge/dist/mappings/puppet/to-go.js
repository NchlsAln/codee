"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.puppetToGoRules = void 0;
exports.puppetToGo = puppetToGo;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("puppet", "go");
function puppetToGo(code) {
  return (0, mapping_helpers_1.translateWithFallback)("puppet", "go", code);
}
exports.puppetToGoRules = rules;
