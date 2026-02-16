"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.csharpAstPatterns = void 0;
exports.csharpAstPatterns = [
    { pattern: "\\bnamespace\\s+\\w+", description: "Namespace declaration" },
    { pattern: "\\bclass\\s+\\w+", description: "Class declaration" },
    { pattern: "\\brecord\\s+\\w+", description: "Record declaration" },
    { pattern: "\\basync\\s+Task", description: "Async method" },
    { pattern: "\\busing\\s+\\w+", description: "Using directive" },
    { pattern: "\\bswitch\\s*\\(", description: "Switch statement/expression" },
    { pattern: "\\bawait\\b", description: "Await usage" },
    { pattern: "\\bvar\\s+\\w+", description: "Implicitly typed local" },
    { pattern: "\\bfrom\\s+\\w+\\s+in\\b", description: "LINQ query syntax" },
    { pattern: "\\bHttpClient\\b", description: "HttpClient usage" },
    { pattern: "\\bMapGet\\b|\\bMapPost\\b", description: "Minimal API mapping" }
];
