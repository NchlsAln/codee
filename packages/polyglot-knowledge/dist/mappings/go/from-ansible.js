"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ansibleToGoRules = void 0;
exports.ansibleToGo = ansibleToGo;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("ansible", "go");
function ansibleToGo(code) {
  return (0, mapping_helpers_1.translateWithFallback)("ansible", "go", code);
}
exports.ansibleToGoRules = rules;
