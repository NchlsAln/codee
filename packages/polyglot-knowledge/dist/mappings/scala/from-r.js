"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rToScalaRules = void 0;
exports.rToScala = rToScala;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("r", "scala");
function rToScala(code) {
    return (0, mapping_helpers_1.translateWithFallback)("r", "scala", code);
}
exports.rToScalaRules = rules;
