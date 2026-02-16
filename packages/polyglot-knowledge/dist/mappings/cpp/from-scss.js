"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scssToCppRules = void 0;
exports.scssToCpp = scssToCpp;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("scss", "cpp");
function scssToCpp(code) {
    return (0, mapping_helpers_1.translateWithFallback)("scss", "cpp", code);
}
exports.scssToCppRules = rules;
