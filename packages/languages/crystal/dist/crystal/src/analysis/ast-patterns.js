"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.crystalAstPatterns = void 0;
exports.crystalAstPatterns = [
    { pattern: "\\bclass\\s+\\w+|\\bmodule\\s+\\w+", description: "Type definition" },
    { pattern: "\\bdef\\s+\\w+", description: "Method definition" },
    { pattern: "\\bmacro\\s+\\w+", description: "Macro definition" },
    { pattern: "\\blib\\s+\\w+", description: "C binding" },
    { pattern: "\\bspawn\\b|\\bChannel\\b", description: "Concurrency primitive" },
    { pattern: "\\brequire\\b", description: "Require directive" },
    { pattern: "\\bnot_nil!\\b", description: "Nil assertion (review safety)" },
    { pattern: "\\bPointer\\.malloc|pointerof", description: "Unsafe pointer usage" },
    { pattern: "\\bas\?\\b|\\bas\\b", description: "Type casting" },
    { pattern: "\\bNil\\b|\\bnil\\b", description: "Nilable values" },
    { pattern: "\\braise\\b", description: "Exception raising" }
];
