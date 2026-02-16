"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.elixirToJavaRules = void 0;
exports.elixirToJava = elixirToJava;
const mapping_helpers_1 = require("../shared/mapping-helpers");
const rules = (0, mapping_helpers_1.buildDefaultRules)("elixir", "java");
function elixirToJava(code) {
    return (0, mapping_helpers_1.translateWithFallback)("elixir", "java", code);
}
exports.elixirToJavaRules = rules;
