export const awkAstPatterns: Array<{ pattern: string; description: string }> = [
	{ pattern: "\\bBEGIN\\b\\s*\\{", description: "BEGIN block" },
	{ pattern: "\\bEND\\b\\s*\\{", description: "END block" },
	{ pattern: "\\$\\d+", description: "Field reference" },
	{ pattern: "\\bFS\\s*=", description: "Field separator assignment" },
	{ pattern: "\\bOFS\\s*=", description: "Output field separator assignment" },
	{ pattern: "\\bNR\\b", description: "Record number usage" },
	{ pattern: "\\bFNR\\b", description: "Per-file record number" },
	{ pattern: "\\bgsub\\s*\\(", description: "Global substitution" },
	{ pattern: "\\bprintf\\s*\\(", description: "Formatted output" },
	{ pattern: "\\bfunction\\s+\\w+\\s*\\(", description: "User-defined function" }
];
