"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.elixirToPythonRules = void 0;
exports.elixirToPython = elixirToPython;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("elixir", "python");
function elixirToPython(code) {
    return (0, mapping_helpers_1.translateWithFallback)("elixir", "python", code);
}
exports.elixirToPythonRules = rules;
