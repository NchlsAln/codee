"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.javaToScalaRules = void 0;
exports.javaToScala = javaToScala;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("java", "scala");
function javaToScala(code) {
    return (0, mapping_helpers_1.translateWithFallback)("java", "scala", code);
}
exports.javaToScalaRules = rules;
