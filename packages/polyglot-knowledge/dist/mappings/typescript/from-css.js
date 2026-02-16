"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cssToTypeScriptRules = void 0;
exports.cssToTypeScript = cssToTypeScript;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("css", "typescript");
function cssToTypeScript(code) {
    return (0, mapping_helpers_1.translateWithFallback)("css", "typescript", code);
}
exports.cssToTypeScriptRules = rules;
