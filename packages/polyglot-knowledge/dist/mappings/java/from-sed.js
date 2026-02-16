"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sedToJavaRules = void 0;
exports.sedToJava = sedToJava;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("sed", "java");
function sedToJava(code) {
    return (0, mapping_helpers_1.translateWithFallback)("sed", "java", code);
}
exports.sedToJavaRules = rules;
