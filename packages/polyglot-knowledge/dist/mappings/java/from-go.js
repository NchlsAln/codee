"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.goToJavaRules = void 0;
exports.goToJava = goToJava;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("go", "java");
function goToJava(code) {
    return (0, mapping_helpers_1.translateWithFallback)("go", "java", code);
}
exports.goToJavaRules = rules;
