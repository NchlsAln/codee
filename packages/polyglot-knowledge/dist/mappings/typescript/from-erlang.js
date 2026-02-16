"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.erlangToTypeScriptRules = void 0;
exports.erlangToTypeScript = erlangToTypeScript;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("erlang", "typescript");
function erlangToTypeScript(code) {
    return (0, mapping_helpers_1.translateWithFallback)("erlang", "typescript", code);
}
exports.erlangToTypeScriptRules = rules;
