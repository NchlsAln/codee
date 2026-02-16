"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.yamlToScalaRules = void 0;
exports.yamlToScala = yamlToScala;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("yaml", "scala");
function yamlToScala(code) {
    return (0, mapping_helpers_1.translateWithFallback)("yaml", "scala", code);
}
exports.yamlToScalaRules = rules;
