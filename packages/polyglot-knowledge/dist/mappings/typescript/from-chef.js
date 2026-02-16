"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chefToTypeScriptRules = void 0;
exports.chefToTypeScript = chefToTypeScript;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("chef", "typescript");
function chefToTypeScript(code) {
  return (0, mapping_helpers_1.translateWithFallback)("chef", "typescript", code);
}
exports.chefToTypeScriptRules = rules;
