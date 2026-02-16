"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scssToJavaRules = void 0;
exports.scssToJava = scssToJava;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("scss", "java");
function scssToJava(code) {
    return (0, mapping_helpers_1.translateWithFallback)("scss", "java", code);
}
exports.scssToJavaRules = rules;
