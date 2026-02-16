export const matlabAstPatterns: Array<{ pattern: string; description: string }> = [
	{ pattern: "^\\s*function\\b", description: "Function definition" },
	{ pattern: "\\bclassdef\\b", description: "Class definition" },
	{ pattern: "\\bend\\b", description: "Block end" },
	{ pattern: "\\bplot\\b|\\bimshow\\b", description: "Visualization" },
	{ pattern: "\\bfor\\b|\\bparfor\\b", description: "Loop" },
	{ pattern: "\\bimport\\b", description: "Import" }
];
