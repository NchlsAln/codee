"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.elixirToSwiftRules = void 0;
exports.elixirToSwift = elixirToSwift;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("elixir", "swift");
function elixirToSwift(code) {
    return (0, mapping_helpers_1.translateWithFallback)("elixir", "swift", code);
}
exports.elixirToSwiftRules = rules;
