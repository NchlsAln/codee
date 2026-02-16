"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.haskellAstPatterns = void 0;
exports.haskellAstPatterns = [
    { pattern: "\\bmodule\\s+\\w+", description: "Module declaration" },
    { pattern: "\\bdata\\s+\\w+|\\bnewtype\\s+\\w+", description: "Data type definition" },
    { pattern: "\\bclass\\s+\\w+|\\binstance\\s+\\w+", description: "Type class definition" },
    { pattern: "::", description: "Type signature" },
    { pattern: "\\bdo\\b", description: "Do-notation" },
    { pattern: "\\bwhere\\b", description: "Where clause" }
];
