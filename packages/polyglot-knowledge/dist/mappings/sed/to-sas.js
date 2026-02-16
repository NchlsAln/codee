"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sedToSasRules = void 0;
exports.sedToSas = sedToSas;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("sed", "sas");
function sedToSas(code) {
    return (0, mapping_helpers_1.translateWithFallback)("sed", "sas", code);
}
exports.sedToSasRules = rules;
