"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dartToTypeScriptRules = void 0;
exports.dartToTypeScript = dartToTypeScript;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("dart", "typescript");
function dartToTypeScript(code) {
    return (0, mapping_helpers_1.translateWithFallback)("dart", "typescript", code);
}
exports.dartToTypeScriptRules = rules;
