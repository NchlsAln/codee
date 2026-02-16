"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rustIdioms = void 0;
exports.rustIdioms = [
    "Use snake_case for functions/variables, PascalCase for types",
    "Prefer Result and Option for error handling",
    "Use iterators and combinators over indexed loops",
    "Favor ownership clarity and borrowing",
    "Return early with ? for fallible operations",
    "Use &str for borrowed strings; String for owned",
    "Prefer enums with data over boolean flags",
    "Avoid unwrap in production; use expect with context",
    "Use lifetimes to express borrowing relationships",
    "Document public APIs with rustdoc",
    "Write unit tests alongside modules",
    "Use builder patterns for complex structs"
];
