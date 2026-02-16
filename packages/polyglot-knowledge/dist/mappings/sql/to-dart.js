"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sqlToDartRules = void 0;
exports.sqlToDart = sqlToDart;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("sql", "dart");
function sqlToDart(code) {
    return (0, mapping_helpers_1.translateWithFallback)("sql", "dart", code);
}
exports.sqlToDartRules = rules;
