"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sqlToCppRules = void 0;
exports.sqlToCpp = sqlToCpp;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("sql", "cpp");
function sqlToCpp(code) {
    return (0, mapping_helpers_1.translateWithFallback)("sql", "cpp", code);
}
exports.sqlToCppRules = rules;
