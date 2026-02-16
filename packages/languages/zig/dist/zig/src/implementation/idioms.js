"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.zigIdioms = void 0;
exports.zigIdioms = [
    {
        name: "Explicit error handling",
        description: "Use error unions with try/catch for explicit control flow."
    },
    {
        name: "Allocator passing",
        description: "Thread allocators explicitly instead of hidden globals."
    },
    {
        name: "Comptime metaprogramming",
        description: "Use comptime and inline for for compile-time logic."
    },
    {
        name: "Defer and errdefer",
        description: "Use defer/errdefer for deterministic cleanup."
    }
];
