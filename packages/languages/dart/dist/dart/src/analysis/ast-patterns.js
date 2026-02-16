"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dartAstPatterns = void 0;
exports.dartAstPatterns = [
    { pattern: "\\bclass\\s+\\w+", description: "Class declaration" },
    { pattern: "\\bmixin\\s+\\w+", description: "Mixin declaration" },
    { pattern: "\\bextension\\s+\\w+", description: "Extension declaration" },
    { pattern: "\\bFuture<", description: "Future type" },
    { pattern: "\\bStream<", description: "Stream type" },
    { pattern: "\\basync\\b", description: "Async function" },
    { pattern: "\\bIsolate\\b", description: "Isolate usage" },
    { pattern: "\\bconst\\b", description: "Const usage" },
    { pattern: "\\b@override\\b", description: "Override annotation" },
    { pattern: "\\bwith\\s+\\w+", description: "Mixin application" }
];
