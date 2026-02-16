"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scssToScalaRules = void 0;
exports.scssToScala = scssToScala;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("scss", "scala");
function scssToScala(code) {
    return (0, mapping_helpers_1.translateWithFallback)("scss", "scala", code);
}
exports.scssToScalaRules = rules;
