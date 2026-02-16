"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ansibleToTypeScriptRules = void 0;
exports.ansibleToTypeScript = ansibleToTypeScript;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("ansible", "typescript");
function ansibleToTypeScript(code) {
  return (0, mapping_helpers_1.translateWithFallback)("ansible", "typescript", code);
}
exports.ansibleToTypeScriptRules = rules;
