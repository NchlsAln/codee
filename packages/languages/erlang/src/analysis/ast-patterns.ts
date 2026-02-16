export const erlangAstPatterns: Array<{ pattern: string; description: string }> = [
	{ pattern: "-module\\(", description: "Module declaration" },
	{ pattern: "-export\\(", description: "Export declaration" },
	{ pattern: "\\breceive\\b", description: "Receive block" },
	{ pattern: "->", description: "Clause arrow" },
	{ pattern: "\\bfun\\b", description: "Anonymous function" },
	{ pattern: "#\\w+", description: "Record usage" }
];
