"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.csharpToJavaRules = void 0;
exports.csharpToJava = csharpToJava;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("csharp", "java");
function csharpToJava(code) {
    return (0, mapping_helpers_1.translateWithFallback)("csharp", "java", code);
}
exports.csharpToJavaRules = rules;
