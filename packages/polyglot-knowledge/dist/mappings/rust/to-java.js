"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rustToJavaRules = void 0;
exports.rustToJava = rustToJava;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("rust", "java");
function rustToJava(code) {
    return (0, mapping_helpers_1.translateWithFallback)("rust", "java", code);
}
exports.rustToJavaRules = rules;
