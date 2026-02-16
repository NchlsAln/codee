"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sqlToTypeScriptRules = void 0;
exports.sqlToTypeScript = sqlToTypeScript;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("sql", "typescript");
function sqlToTypeScript(code) {
    return (0, mapping_helpers_1.translateWithFallback)("sql", "typescript", code);
}
exports.sqlToTypeScriptRules = rules;
