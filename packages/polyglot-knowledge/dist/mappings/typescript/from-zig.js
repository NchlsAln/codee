"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.zigToTypeScriptRules = void 0;
exports.zigToTypeScript = zigToTypeScript;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("zig", "typescript");
function zigToTypeScript(code) {
    return (0, mapping_helpers_1.translateWithFallback)("zig", "typescript", code);
}
exports.zigToTypeScriptRules = rules;
