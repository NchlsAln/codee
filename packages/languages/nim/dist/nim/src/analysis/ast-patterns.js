"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nimAstPatterns = void 0;
exports.nimAstPatterns = [
    { pattern: "\\bproc\\s+\\w+|\\bfunc\\s+\\w+", description: "Procedure/function definition" },
    { pattern: "\\btemplate\\s+\\w+|\\bmacro\\s+\\w+", description: "Template or macro" },
    { pattern: "\\btype\\s+\\w+", description: "Type definition" },
    { pattern: "\\bobject\\b", description: "Object type" },
    { pattern: "\\bimport\\b|\\binclude\\b", description: "Module import" },
    { pattern: "\\bwhen\\b", description: "Conditional compilation" },
    { pattern: "\\basync\\b|\\bawait\\b", description: "Async/await" },
    { pattern: "\\bdistinct\\b", description: "Distinct type declaration" },
    { pattern: "\\bref\\s+object\\b", description: "Ref object (heap allocation)" },
    { pattern: "\\bptr\\b|\\bunsafeAddr\\b", description: "Unsafe pointer usage" },
    { pattern: "\\bcast\[", description: "Unsafe cast" },
    { pattern: "\\bdefer\\b", description: "Defer cleanup" },
    { pattern: "\\bspawn\\b|\\bthreadpool\\b", description: "Thread pool usage" }
];
