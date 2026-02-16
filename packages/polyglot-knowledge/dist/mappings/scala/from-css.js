"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cssToScalaRules = void 0;
exports.cssToScala = cssToScala;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("css", "scala");
function cssToScala(code) {
    return (0, mapping_helpers_1.translateWithFallback)("css", "scala", code);
}
exports.cssToScalaRules = rules;
