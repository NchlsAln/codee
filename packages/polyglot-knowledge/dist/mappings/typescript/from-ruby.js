"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rubyToTypeScriptRules = void 0;
exports.rubyToTypeScript = rubyToTypeScript;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("ruby", "typescript");
function rubyToTypeScript(code) {
    return (0, mapping_helpers_1.translateWithFallback)("ruby", "typescript", code);
}
exports.rubyToTypeScriptRules = rules;
