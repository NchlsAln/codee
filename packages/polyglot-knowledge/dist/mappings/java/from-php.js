"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.phpToJavaRules = void 0;
exports.phpToJava = phpToJava;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("php", "java");
function phpToJava(code) {
    return (0, mapping_helpers_1.translateWithFallback)("php", "java", code);
}
exports.phpToJavaRules = rules;
