"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typescriptAstPatterns = void 0;
exports.typescriptAstPatterns = [
    "idiom: discriminated unions with switch narrowing",
    "idiom: const assertions for literal types",
    "idiom: type guards using in/typeof/instanceof",
    "smell: any usage without justification",
    "smell: non-null assertions on nullable data",
    "smell: implicit any in tsconfig",
    "perf: JSON.parse/stringify in hot loops",
    "perf: unnecessary array copies (spread in loops)",
    "security: eval or Function constructor",
    "security: unsanitized data into SQL or shell",
    "refactor: extract helper from long function",
    "refactor: replace duplicated union shapes with a shared type",
    "async: missing await in promise chain",
    "api: unsafe public type (exposes internal details)",
    "interop: mixing CJS/ESM default import pitfalls"
];
