"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cppToScalaRules = void 0;
exports.cppToScala = cppToScala;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("cpp", "scala");
function cppToScala(code) {
    return (0, mapping_helpers_1.translateWithFallback)("cpp", "scala", code);
}
exports.cppToScalaRules = rules;
