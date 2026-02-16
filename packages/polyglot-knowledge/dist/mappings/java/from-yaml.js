"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.yamlToJavaRules = void 0;
exports.yamlToJava = yamlToJava;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("yaml", "java");
function yamlToJava(code) {
    return (0, mapping_helpers_1.translateWithFallback)("yaml", "java", code);
}
exports.yamlToJavaRules = rules;
