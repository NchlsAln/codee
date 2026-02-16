"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.xmlToJavaRules = void 0;
exports.xmlToJava = xmlToJava;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("xml", "java");
function xmlToJava(code) {
    return (0, mapping_helpers_1.translateWithFallback)("xml", "java", code);
}
exports.xmlToJavaRules = rules;
