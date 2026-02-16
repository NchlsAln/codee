"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.csharpToGoRules = void 0;
exports.csharpToGo = csharpToGo;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("csharp", "go");
function csharpToGo(code) {
    return (0, mapping_helpers_1.translateWithFallback)("csharp", "go", code);
}
exports.csharpToGoRules = rules;
