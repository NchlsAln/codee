"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.puppetToSwiftRules = void 0;
exports.puppetToSwift = puppetToSwift;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("puppet", "swift");
function puppetToSwift(code) {
  return (0, mapping_helpers_1.translateWithFallback)("puppet", "swift", code);
}
exports.puppetToSwiftRules = rules;
