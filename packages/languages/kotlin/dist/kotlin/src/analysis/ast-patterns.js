"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.kotlinAstPatterns = void 0;
exports.kotlinAstPatterns = [
    { pattern: "\\bdata\\s+class\\s+\\w+", description: "Data class declaration" },
    { pattern: "\\bsealed\\s+(class|interface)\\s+\\w+", description: "Sealed hierarchy" },
    { pattern: "\\bfun\\s+\\w+\\s*\\(", description: "Function declaration" },
    { pattern: "\\bwhen\\s*\\(", description: "When expression" },
    { pattern: "\\bsuspend\\s+fun\\s+\\w+", description: "Suspend function" },
    { pattern: "\\bval\\s+\\w+\\s*(:|=)", description: "Immutable property or local" },
    { pattern: "!!", description: "Non-null assertion (potential smell)" },
    { pattern: "\\bGlobalScope\\.", description: "Unscoped coroutine usage" },
    { pattern: "\\bby\\s+lazy\\b", description: "Lazy initialization" },
    { pattern: "\\bobject\\s+:", description: "Anonymous object" },
    { pattern: "\\bwhen\\s*\\{", description: "When as statement" },
    { pattern: "\\btry\\s*\\{", description: "Try expression" }
];
