"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.htmlToJavaRules = void 0;
exports.htmlToJava = htmlToJava;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("html", "java");
function htmlToJava(code) {
    return (0, mapping_helpers_1.translateWithFallback)("html", "java", code);
}
exports.htmlToJavaRules = rules;
