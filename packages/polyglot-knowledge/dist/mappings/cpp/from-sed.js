"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sedToCppRules = void 0;
exports.sedToCpp = sedToCpp;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("sed", "cpp");
function sedToCpp(code) {
    return (0, mapping_helpers_1.translateWithFallback)("sed", "cpp", code);
}
exports.sedToCppRules = rules;
