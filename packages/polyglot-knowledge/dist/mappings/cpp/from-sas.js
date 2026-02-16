"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sasToCppRules = void 0;
exports.sasToCpp = sasToCpp;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("sas", "cpp");
function sasToCpp(code) {
    return (0, mapping_helpers_1.translateWithFallback)("sas", "cpp", code);
}
exports.sasToCppRules = rules;
