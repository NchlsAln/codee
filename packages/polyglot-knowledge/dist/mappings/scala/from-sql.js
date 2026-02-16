"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sqlToScalaRules = void 0;
exports.sqlToScala = sqlToScala;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("sql", "scala");
function sqlToScala(code) {
    return (0, mapping_helpers_1.translateWithFallback)("sql", "scala", code);
}
exports.sqlToScalaRules = rules;
