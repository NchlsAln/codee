"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.crystalToCppRules = void 0;
exports.crystalToCpp = crystalToCpp;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("crystal", "cpp");
function crystalToCpp(code) {
    return (0, mapping_helpers_1.translateWithFallback)("crystal", "cpp", code);
}
exports.crystalToCppRules = rules;
