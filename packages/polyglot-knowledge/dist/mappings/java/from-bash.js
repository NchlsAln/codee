"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bashToJavaRules = void 0;
exports.bashToJava = bashToJava;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("bash", "java");
function bashToJava(code) {
    return (0, mapping_helpers_1.translateWithFallback)("bash", "java", code);
}
exports.bashToJavaRules = rules;
