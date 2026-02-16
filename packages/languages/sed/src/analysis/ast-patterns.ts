export const sedAstPatterns: Array<{ pattern: string; description: string }> = [
	{ pattern: "^\\s*\\d+(?:,\\d+)?[pqd]", description: "Line address commands" },
	{ pattern: "^\\s*/.+/\\s*,\\s*/.+/", description: "Regex address range" },
	{ pattern: "s/[^/]+/[^/]+/", description: "Substitution command" },
	{ pattern: "\\b[HhGgXx]\\b", description: "Hold space operations" },
	{ pattern: "\\b[bt]\\b", description: "Branch/test commands" },
	{ pattern: "\\-i\\b", description: "In-place edits (GNU/BSD differences)" },
	{ pattern: "\\-E\\b|\\-r\\b", description: "Extended regex flags" },
	{ pattern: "\\b[dp]\\b", description: "Delete/print commands" }
];
