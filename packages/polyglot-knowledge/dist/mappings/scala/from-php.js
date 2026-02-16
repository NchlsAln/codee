"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.phpToScalaRules = void 0;
exports.phpToScala = phpToScala;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("php", "scala");
function phpToScala(code) {
    return (0, mapping_helpers_1.translateWithFallback)("php", "scala", code);
}
exports.phpToScalaRules = rules;
