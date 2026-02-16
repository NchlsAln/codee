"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.phpToTypeScriptRules = void 0;
exports.phpToTypeScript = phpToTypeScript;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("php", "typescript");
function phpToTypeScript(code) {
    return (0, mapping_helpers_1.translateWithFallback)("php", "typescript", code);
}
exports.phpToTypeScriptRules = rules;
