"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.puppetToDartRules = void 0;
exports.puppetToDart = puppetToDart;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("puppet", "dart");
function puppetToDart(code) {
  return (0, mapping_helpers_1.translateWithFallback)("puppet", "dart", code);
}
exports.puppetToDartRules = rules;
