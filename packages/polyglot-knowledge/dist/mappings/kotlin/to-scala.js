"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.kotlinToScalaRules = void 0;
exports.kotlinToScala = kotlinToScala;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("kotlin", "scala");
function kotlinToScala(code) {
    return (0, mapping_helpers_1.translateWithFallback)("kotlin", "scala", code);
}
exports.kotlinToScalaRules = rules;
