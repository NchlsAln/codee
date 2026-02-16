"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.javaToCppRules = void 0;
exports.javaToCpp = javaToCpp;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("java", "cpp");
function javaToCpp(code) {
    return (0, mapping_helpers_1.translateWithFallback)("java", "cpp", code);
}
exports.javaToCppRules = rules;
