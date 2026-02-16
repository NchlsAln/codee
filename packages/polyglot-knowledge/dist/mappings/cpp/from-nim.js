"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nimToCppRules = void 0;
exports.nimToCpp = nimToCpp;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("nim", "cpp");
function nimToCpp(code) {
    return (0, mapping_helpers_1.translateWithFallback)("nim", "cpp", code);
}
exports.nimToCppRules = rules;
