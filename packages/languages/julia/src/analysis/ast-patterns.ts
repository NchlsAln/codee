export const juliaAstPatterns: Array<{ pattern: string; description: string }> = [
	{ pattern: "\\bfunction\\s+\\w+", description: "Function definition" },
	{ pattern: "\\bstruct\\s+\\w+", description: "Struct definition" },
	{ pattern: "::", description: "Type annotation" },
	{ pattern: "\\bmacro\\s+\\w+", description: "Macro definition" },
	{ pattern: "\\b@\\w+", description: "Macro invocation" },
	{ pattern: "\\busing\\b|\\bimport\\b", description: "Module import" }
];
