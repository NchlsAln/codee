"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.goAstPatterns = void 0;
exports.goAstPatterns = [
    "short variable declarations",
    "defer statements",
    "goroutines",
    "select statements",
    "interface definitions",
    "go/ast nodes via gopls",
    "smell: error ignored with _",
    "smell: panic in library code",
    "perf: excessive allocations in loops",
    "perf: goroutine leaks (missing context cancel)",
    "security: sql injection via string concat",
    "security: unchecked file paths",
    "refactor: extract helper from large handler",
    "refactor: replace duplicated structs with shared type",
    "idiom: use context for request lifetime"
];
