export const zigAstPatterns: Array<{ pattern: string; description: string }> = [
	{ pattern: "\\bpub\\s+fn\\b|\\bfn\\b", description: "Function definition" },
	{ pattern: "\\bconst\\b|\\bvar\\b", description: "Variable declaration" },
	{ pattern: "\\bstruct\\b|\\benum\\b", description: "Type definition" },
	{ pattern: "\\bcomptime\\b", description: "Comptime evaluation" },
	{ pattern: "\\btry\\b|\\bcatch\\b", description: "Error handling" },
	{ pattern: "\\bdefer\\b|\\berrdefer\\b", description: "Defer cleanup" },
	{ pattern: "\\basync\\b|\\bawait\\b", description: "Async syntax" }
];
