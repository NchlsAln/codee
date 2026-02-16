"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scalaToCppRules = void 0;
exports.scalaToCpp = scalaToCpp;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("scala", "cpp");
function scalaToCpp(code) {
    return (0, mapping_helpers_1.translateWithFallback)("scala", "cpp", code);
}
exports.scalaToCppRules = rules;
