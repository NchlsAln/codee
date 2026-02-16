"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sasToPhpRules = void 0;
exports.sasToPhp = sasToPhp;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("sas", "php");
function sasToPhp(code) {
    return (0, mapping_helpers_1.translateWithFallback)("sas", "php", code);
}
exports.sasToPhpRules = rules;
