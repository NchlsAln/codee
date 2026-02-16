"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ansibleToPhpRules = void 0;
exports.ansibleToPhp = ansibleToPhp;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("ansible", "php");
function ansibleToPhp(code) {
  return (0, mapping_helpers_1.translateWithFallback)("ansible", "php", code);
}
exports.ansibleToPhpRules = rules;
