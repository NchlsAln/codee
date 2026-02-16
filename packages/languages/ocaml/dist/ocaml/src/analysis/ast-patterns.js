"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ocamlAstPatterns = void 0;
exports.ocamlAstPatterns = [
    { pattern: "\\blet\\b", description: "Let binding" },
    { pattern: "\\btype\\s+\\w+", description: "Type definition" },
    { pattern: "\\bmodule\\s+\\w+", description: "Module definition" },
    { pattern: "\\bmatch\\b", description: "Pattern matching" },
    { pattern: "\\bfun\\b", description: "Anonymous function" },
    { pattern: "\\bopen\\b", description: "Module open" }
];
