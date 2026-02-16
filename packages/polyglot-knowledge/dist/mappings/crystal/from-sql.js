"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sqlToCrystalRules = void 0;
exports.sqlToCrystal = sqlToCrystal;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("sql", "crystal");
function sqlToCrystal(code) {
    return (0, mapping_helpers_1.translateWithFallback)("sql", "crystal", code);
}
exports.sqlToCrystalRules = rules;
