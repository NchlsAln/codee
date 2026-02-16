export const phpAstPatterns: Array<{ pattern: string; description: string }> = [
	{ pattern: "\\bclass\\s+\\w+", description: "Class declaration" },
	{ pattern: "\\bfunction\\s+\\w+\\s*\\(", description: "Function declaration" },
	{ pattern: "\\$[a-zA-Z_][a-zA-Z0-9_]*", description: "Variable usage" },
	{ pattern: "->|::", description: "Member access" },
	{ pattern: "\\bnamespace\\b", description: "Namespace declaration" },
	{ pattern: "\\btrait\\b", description: "Trait declaration" }
];
