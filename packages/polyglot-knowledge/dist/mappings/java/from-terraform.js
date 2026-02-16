"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.terraformToJavaRules = void 0;
exports.terraformToJava = terraformToJava;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("terraform", "java");
function terraformToJava(code) {
  return (0, mapping_helpers_1.translateWithFallback)("terraform", "java", code);
}
exports.terraformToJavaRules = rules;
