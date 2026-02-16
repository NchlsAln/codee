"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.phpAstPatterns = void 0;
exports.phpAstPatterns = [
    { pattern: "\\bclass\\s+\\w+", description: "Class declaration" },
    { pattern: "\\bfunction\\s+\\w+\\s*\\(", description: "Function declaration" },
    { pattern: "\\$[a-zA-Z_][a-zA-Z0-9_]*", description: "Variable usage" },
    { pattern: "->|::", description: "Member access" },
    { pattern: "\\bnamespace\\b", description: "Namespace declaration" },
    { pattern: "\\btrait\\b", description: "Trait declaration" }
];
