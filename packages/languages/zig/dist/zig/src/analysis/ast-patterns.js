"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.zigAstPatterns = void 0;
exports.zigAstPatterns = [
    { pattern: "\\bpub\\s+fn\\b|\\bfn\\b", description: "Function definition" },
    { pattern: "\\bconst\\b|\\bvar\\b", description: "Variable declaration" },
    { pattern: "\\bstruct\\b|\\benum\\b", description: "Type definition" },
    { pattern: "\\bcomptime\\b", description: "Comptime evaluation" },
    { pattern: "\\btry\\b|\\bcatch\\b", description: "Error handling" },
    { pattern: "\\bdefer\\b|\\berrdefer\\b", description: "Defer cleanup" },
    { pattern: "\\basync\\b|\\bawait\\b", description: "Async syntax" },
    { pattern: "@cImport|extern", description: "C interop" },
    { pattern: "@ptrCast|@intToPtr|@ptrToInt", description: "Unsafe pointer casts" },
    { pattern: "\\bundefined\\b", description: "Undefined value usage (safety risk)" },
    { pattern: "\\bunreachable\\b", description: "Unreachable assertion (review invariants)" },
    { pattern: "std\\.mem\\.allocator|allocator\\.alloc", description: "Heap allocation" },
    { pattern: "\\bthread\\b|std\\.Thread", description: "Threading" },
    { pattern: "\\bpanic\\b", description: "Runtime panic" }
];
