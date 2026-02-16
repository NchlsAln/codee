"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ansibleToJavaRules = void 0;
exports.ansibleToJava = ansibleToJava;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("ansible", "java");
function ansibleToJava(code) {
  return (0, mapping_helpers_1.translateWithFallback)("ansible", "java", code);
}
exports.ansibleToJavaRules = rules;
