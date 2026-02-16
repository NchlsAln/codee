"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.juliaToCppRules = void 0;
exports.juliaToCpp = juliaToCpp;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("julia", "cpp");
function juliaToCpp(code) {
    return (0, mapping_helpers_1.translateWithFallback)("julia", "cpp", code);
}
exports.juliaToCppRules = rules;
