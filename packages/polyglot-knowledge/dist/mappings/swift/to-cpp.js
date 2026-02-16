"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.swiftToCppRules = void 0;
exports.swiftToCpp = swiftToCpp;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("swift", "cpp");
function swiftToCpp(code) {
    return (0, mapping_helpers_1.translateWithFallback)("swift", "cpp", code);
}
exports.swiftToCppRules = rules;
