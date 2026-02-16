"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.kotlinToJavaRules = void 0;
exports.kotlinToJava = kotlinToJava;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("kotlin", "java");
function kotlinToJava(code) {
    return (0, mapping_helpers_1.translateWithFallback)("kotlin", "java", code);
}
exports.kotlinToJavaRules = rules;
