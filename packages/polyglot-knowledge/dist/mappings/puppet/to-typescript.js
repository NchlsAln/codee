"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.puppetToTypeScriptRules = void 0;
exports.puppetToTypeScript = puppetToTypeScript;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("puppet", "typescript");
function puppetToTypeScript(code) {
  return (0, mapping_helpers_1.translateWithFallback)("puppet", "typescript", code);
}
exports.puppetToTypeScriptRules = rules;
