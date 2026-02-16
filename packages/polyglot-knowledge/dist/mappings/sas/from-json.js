"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jsonToSasRules = void 0;
exports.jsonToSas = jsonToSas;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("json", "sas");
function jsonToSas(code) {
    return (0, mapping_helpers_1.translateWithFallback)("json", "sas", code);
}
exports.jsonToSasRules = rules;
