"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sasToGoRules = void 0;
exports.sasToGo = sasToGo;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("sas", "go");
function sasToGo(code) {
    return (0, mapping_helpers_1.translateWithFallback)("sas", "go", code);
}
exports.sasToGoRules = rules;
