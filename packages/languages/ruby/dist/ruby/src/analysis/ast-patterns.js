"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rubyAstPatterns = void 0;
exports.rubyAstPatterns = [
    { pattern: "\\bclass\\s+\\w+", description: "Class declaration" },
    { pattern: "\\bmodule\\s+\\w+", description: "Module declaration" },
    { pattern: "\\bdef\\s+\\w+", description: "Method definition" },
    { pattern: "\\bdo\\b|\\bend\\b", description: "Block delimiters" },
    { pattern: ":\\w+", description: "Symbol literal" },
    { pattern: "\\binclude\\b|\\bextend\\b", description: "Mixin usage" },
    { pattern: "\\battr_(reader|writer|accessor)\\b", description: "Attribute accessors" },
    { pattern: "\\bRSpec\\b|\\bdescribe\\b", description: "RSpec usage" },
    { pattern: "\\bActiveRecord::", description: "ActiveRecord usage" },
    { pattern: "\\beval\\b", description: "Dynamic code execution (security risk)" },
    { pattern: "\\bOpen3\\.", description: "Shell execution (review inputs)" },
    { pattern: "\\bThread\\b", description: "Thread usage" },
    { pattern: "\\bFiber\\b", description: "Fiber usage" }
];
