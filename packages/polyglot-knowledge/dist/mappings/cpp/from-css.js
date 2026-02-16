"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cssToCppRules = void 0;
exports.cssToCpp = cssToCpp;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("css", "cpp");
function cssToCpp(code) {
    return (0, mapping_helpers_1.translateWithFallback)("css", "cpp", code);
}
exports.cssToCppRules = rules;
