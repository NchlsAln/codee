"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cppToJavaRules = void 0;
exports.cppToJava = cppToJava;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("cpp", "java");
function cppToJava(code) {
    return (0, mapping_helpers_1.translateWithFallback)("cpp", "java", code);
}
exports.cppToJavaRules = rules;
