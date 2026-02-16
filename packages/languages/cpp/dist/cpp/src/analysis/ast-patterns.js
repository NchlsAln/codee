"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cppAstPatterns = void 0;
exports.cppAstPatterns = [
    "class and struct declarations",
    "template declarations",
    "move semantics",
    "range-based for",
    "tree-sitter-cpp or clangd",
    "smell: raw new/delete in business logic",
    "smell: shared_ptr cycles",
    "perf: vector reallocation in loops (missing reserve)",
    "perf: copying large objects by value",
    "security: unchecked buffer access",
    "security: unsafe strcpy/strcat",
    "refactor: replace manual loops with algorithms",
    "refactor: extract helper from long functions",
    "idiom: use std::optional instead of nullptr",
    "concurrency: missing lock guards"
];
