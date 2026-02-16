"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.erlangToScalaRules = void 0;
exports.erlangToScala = erlangToScala;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("erlang", "scala");
function erlangToScala(code) {
    return (0, mapping_helpers_1.translateWithFallback)("erlang", "scala", code);
}
exports.erlangToScalaRules = rules;
