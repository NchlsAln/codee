export const rubyAstPatterns: Array<{ pattern: string; description: string }> = [
	{ pattern: "\\bclass\\s+\\w+", description: "Class declaration" },
	{ pattern: "\\bmodule\\s+\\w+", description: "Module declaration" },
	{ pattern: "\\bdef\\s+\\w+", description: "Method definition" },
	{ pattern: "\\bdo\\b|\\bend\\b", description: "Block delimiters" },
	{ pattern: ":\\w+", description: "Symbol literal" },
	{ pattern: "\\binclude\\b|\\bextend\\b", description: "Mixin usage" }
];
