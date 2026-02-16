"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bashToCppRules = void 0;
exports.bashToCpp = bashToCpp;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("bash", "cpp");
function bashToCpp(code) {
    return (0, mapping_helpers_1.translateWithFallback)("bash", "cpp", code);
}
exports.bashToCppRules = rules;
