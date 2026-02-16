"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bashToScalaRules = void 0;
exports.bashToScala = bashToScala;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("bash", "scala");
function bashToScala(code) {
    return (0, mapping_helpers_1.translateWithFallback)("bash", "scala", code);
}
exports.bashToScalaRules = rules;
