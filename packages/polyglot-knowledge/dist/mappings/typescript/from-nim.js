"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nimToTypeScriptRules = void 0;
exports.nimToTypeScript = nimToTypeScript;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("nim", "typescript");
function nimToTypeScript(code) {
    return (0, mapping_helpers_1.translateWithFallback)("nim", "typescript", code);
}
exports.nimToTypeScriptRules = rules;
