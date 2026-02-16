"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sasToTypeScriptRules = void 0;
exports.sasToTypeScript = sasToTypeScript;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("sas", "typescript");
function sasToTypeScript(code) {
    return (0, mapping_helpers_1.translateWithFallback)("sas", "typescript", code);
}
exports.sasToTypeScriptRules = rules;
