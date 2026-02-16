export const elixirAstPatterns: Array<{ pattern: string; description: string }> = [
	{ pattern: "\\bdefmodule\\b", description: "Module definition" },
	{ pattern: "\\bdef\\b", description: "Function definition" },
	{ pattern: "\\|>", description: "Pipeline operator" },
	{ pattern: "%\\{", description: "Map literal" },
	{ pattern: "\\bcase\\b", description: "Case expression" },
	{ pattern: "\\breceive\\b", description: "Receive block" }
];
