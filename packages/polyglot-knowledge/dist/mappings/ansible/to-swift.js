"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ansibleToSwiftRules = void 0;
exports.ansibleToSwift = ansibleToSwift;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("ansible", "swift");
function ansibleToSwift(code) {
  return (0, mapping_helpers_1.translateWithFallback)("ansible", "swift", code);
}
exports.ansibleToSwiftRules = rules;
