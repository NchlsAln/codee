"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.phpAstPatterns = void 0;
exports.phpAstPatterns = [
    { pattern: "\\bclass\\s+\\w+", description: "Class declaration" },
    { pattern: "\\bfunction\\s+\\w+\\s*\\(", description: "Function declaration" },
    { pattern: "\\$[a-zA-Z_][a-zA-Z0-9_]*", description: "Variable usage" },
    { pattern: "->|::", description: "Member access" },
    { pattern: "\\bnamespace\\b", description: "Namespace declaration" },
    { pattern: "\\btrait\\b", description: "Trait declaration" },
    { pattern: "\\binterface\\b", description: "Interface declaration" },
    { pattern: "declare\\s*\\(strict_types=1\\)", description: "Strict types enabled" },
    { pattern: "\\bmatch\\b", description: "Match expression" },
    { pattern: "\\?->", description: "Nullsafe operator" },
    { pattern: "\\$__?\\w+", description: "Superglobal usage (security review)" },
    { pattern: "\\beval\\s*\\(", description: "Dynamic code execution (security risk)" },
    { pattern: "\\bmysql_query\\b|\\bmysqli_query\\b", description: "Legacy SQL execution (risk of injection)" },
    { pattern: "\\bheader\\s*\\(", description: "Direct header manipulation" },
    { pattern: "\\becho\\b|\\bprint\\b", description: "Direct output" }
];
