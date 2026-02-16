"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rToTypeScriptRules = void 0;
exports.rToTypeScript = rToTypeScript;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("r", "typescript");
function rToTypeScript(code) {
    return (0, mapping_helpers_1.translateWithFallback)("r", "typescript", code);
}
exports.rToTypeScriptRules = rules;
