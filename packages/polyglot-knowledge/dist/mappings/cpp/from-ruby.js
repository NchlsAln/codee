"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rubyToCppRules = void 0;
exports.rubyToCpp = rubyToCpp;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("ruby", "cpp");
function rubyToCpp(code) {
    return (0, mapping_helpers_1.translateWithFallback)("ruby", "cpp", code);
}
exports.rubyToCppRules = rules;
