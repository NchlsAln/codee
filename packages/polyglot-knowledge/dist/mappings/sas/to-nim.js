"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sasToNimRules = void 0;
exports.sasToNim = sasToNim;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("sas", "nim");
function sasToNim(code) {
    return (0, mapping_helpers_1.translateWithFallback)("sas", "nim", code);
}
exports.sasToNimRules = rules;
