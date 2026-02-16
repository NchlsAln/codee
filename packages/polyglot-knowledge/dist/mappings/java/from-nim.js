"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nimToJavaRules = void 0;
exports.nimToJava = nimToJava;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("nim", "java");
function nimToJava(code) {
    return (0, mapping_helpers_1.translateWithFallback)("nim", "java", code);
}
exports.nimToJavaRules = rules;
