"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pythonToJavaRules = void 0;
exports.pythonToJava = pythonToJava;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("python", "java");
function pythonToJava(code) {
    return (0, mapping_helpers_1.translateWithFallback)("python", "java", code);
}
exports.pythonToJavaRules = rules;
