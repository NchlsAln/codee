export const jsonAstPatterns: Array<{ pattern: string; description: string }> = [
	{ pattern: "\\{\\s*\"\\w+\"\\s*:", description: "Object literal" },
	{ pattern: "\\[\\s*\\{", description: "Array of objects" },
	{ pattern: "\",\\s*\\}", description: "Trailing comma (invalid JSON)" },
	{ pattern: "\",\\s*\\]", description: "Trailing comma in array (invalid JSON)" },
	{ pattern: "\"\$schema\"", description: "JSON Schema usage" },
	{ pattern: "\"id\"|\"_id\"", description: "Identifier fields" },
	{ pattern: "null", description: "Null literals" }
];
