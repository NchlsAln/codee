"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chefToJavaRules = void 0;
exports.chefToJava = chefToJava;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("chef", "java");
function chefToJava(code) {
  return (0, mapping_helpers_1.translateWithFallback)("chef", "java", code);
}
exports.chefToJavaRules = rules;
