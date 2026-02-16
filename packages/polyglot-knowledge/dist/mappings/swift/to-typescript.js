"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.swiftToTypeScriptRules = void 0;
exports.swiftToTypeScript = swiftToTypeScript;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("swift", "typescript");
function swiftToTypeScript(code) {
    return (0, mapping_helpers_1.translateWithFallback)("swift", "typescript", code);
}
exports.swiftToTypeScriptRules = rules;
