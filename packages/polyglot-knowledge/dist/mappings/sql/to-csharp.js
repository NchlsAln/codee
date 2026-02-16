"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sqlToCsharpRules = void 0;
exports.sqlToCsharp = sqlToCsharp;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("sql", "csharp");
function sqlToCsharp(code) {
    return (0, mapping_helpers_1.translateWithFallback)("sql", "csharp", code);
}
exports.sqlToCsharpRules = rules;
