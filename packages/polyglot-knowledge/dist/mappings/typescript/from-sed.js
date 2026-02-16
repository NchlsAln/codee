"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sedToTypeScriptRules = void 0;
exports.sedToTypeScript = sedToTypeScript;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("sed", "typescript");
function sedToTypeScript(code) {
    return (0, mapping_helpers_1.translateWithFallback)("sed", "typescript", code);
}
exports.sedToTypeScriptRules = rules;
