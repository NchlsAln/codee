"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.elixirToCppRules = void 0;
exports.elixirToCpp = elixirToCpp;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("elixir", "cpp");
function elixirToCpp(code) {
    return (0, mapping_helpers_1.translateWithFallback)("elixir", "cpp", code);
}
exports.elixirToCppRules = rules;
