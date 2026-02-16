"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jsonToTypeScriptRules = void 0;
exports.jsonToTypeScript = jsonToTypeScript;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("json", "typescript");
function jsonToTypeScript(code) {
    return (0, mapping_helpers_1.translateWithFallback)("json", "typescript", code);
}
exports.jsonToTypeScriptRules = rules;
