"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scalaToTypeScriptRules = void 0;
exports.scalaToTypeScript = scalaToTypeScript;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("scala", "typescript");
function scalaToTypeScript(code) {
    return (0, mapping_helpers_1.translateWithFallback)("scala", "typescript", code);
}
exports.scalaToTypeScriptRules = rules;
