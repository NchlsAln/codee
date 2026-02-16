"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ansibleToDartRules = void 0;
exports.ansibleToDart = ansibleToDart;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("ansible", "dart");
function ansibleToDart(code) {
  return (0, mapping_helpers_1.translateWithFallback)("ansible", "dart", code);
}
exports.ansibleToDartRules = rules;
