export const yamlAstPatterns: Array<{ pattern: string; description: string }> = [
	{ pattern: "^\\s+-\\s+", description: "List item" },
	{ pattern: "^\\s*\\w+\\s*:\\s*$", description: "Mapping key without value" },
	{ pattern: "&\\w+", description: "Anchor definition" },
	{ pattern: "\\*\\w+", description: "Alias reference" },
	{ pattern: "^\\s*\\w+\\s*:\\s*\".*\"", description: "Quoted string" },
	{ pattern: "^\\s*\\w+\\s*:\\s*(true|false|null)\\b", description: "Implicit typing" },
	{ pattern: "\\t", description: "Tab indentation (invalid)" }
];
