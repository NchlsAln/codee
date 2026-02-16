export const haskellAstPatterns: Array<{ pattern: string; description: string }> = [
	{ pattern: "\\bmodule\\s+\\w+", description: "Module declaration" },
	{ pattern: "\\bdata\\s+\\w+|\\bnewtype\\s+\\w+", description: "Data type definition" },
	{ pattern: "\\bclass\\s+\\w+|\\binstance\\s+\\w+", description: "Type class definition" },
	{ pattern: "::", description: "Type signature" },
	{ pattern: "\\bdo\\b", description: "Do-notation" },
	{ pattern: "\\bwhere\\b", description: "Where clause" },
	{ pattern: "{-#\\s*LANGUAGE", description: "Language extension" },
	{ pattern: "\\bunsafePerformIO\\b", description: "Unsafe IO (safety risk)" },
	{ pattern: "\\bhead\\b|\\btail\\b|\\bfromJust\\b", description: "Partial functions" },
	{ pattern: "\\berror\\b|\\bundefined\\b", description: "Runtime crash paths" },
	{ pattern: "\\bseq\\b|\\bdeepseq\\b", description: "Strictness control" }
];
