"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dockerfileToTypeScriptRules = void 0;
exports.dockerfileToTypeScript = dockerfileToTypeScript;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("dockerfile", "typescript");
function dockerfileToTypeScript(code) {
  return (0, mapping_helpers_1.translateWithFallback)("dockerfile", "typescript", code);
}
exports.dockerfileToTypeScriptRules = rules;
