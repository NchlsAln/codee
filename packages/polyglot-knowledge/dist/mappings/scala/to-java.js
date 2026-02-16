"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scalaToJavaRules = void 0;
exports.scalaToJava = scalaToJava;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("scala", "java");
function scalaToJava(code) {
    return (0, mapping_helpers_1.translateWithFallback)("scala", "java", code);
}
exports.scalaToJavaRules = rules;
