"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sqlToJavaRules = void 0;
exports.sqlToJava = sqlToJava;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("sql", "java");
function sqlToJava(code) {
    return (0, mapping_helpers_1.translateWithFallback)("sql", "java", code);
}
exports.sqlToJavaRules = rules;
