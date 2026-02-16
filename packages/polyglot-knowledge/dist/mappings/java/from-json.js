"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jsonToJavaRules = void 0;
exports.jsonToJava = jsonToJava;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("json", "java");
function jsonToJava(code) {
    return (0, mapping_helpers_1.translateWithFallback)("json", "java", code);
}
exports.jsonToJavaRules = rules;
