"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typescriptToJavaRules = void 0;
exports.typescriptToJava = typescriptToJava;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("typescript", "java");
function typescriptToJava(code) {
    return (0, mapping_helpers_1.translateWithFallback)("typescript", "java", code);
}
exports.typescriptToJavaRules = rules;
