"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.terraformToTypeScriptRules = void 0;
exports.terraformToTypeScript = terraformToTypeScript;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("terraform", "typescript");
function terraformToTypeScript(code) {
  return (0, mapping_helpers_1.translateWithFallback)("terraform", "typescript", code);
}
exports.terraformToTypeScriptRules = rules;
