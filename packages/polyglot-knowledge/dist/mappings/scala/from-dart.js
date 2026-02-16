"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dartToScalaRules = void 0;
exports.dartToScala = dartToScala;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("dart", "scala");
function dartToScala(code) {
    return (0, mapping_helpers_1.translateWithFallback)("dart", "scala", code);
}
exports.dartToScalaRules = rules;
