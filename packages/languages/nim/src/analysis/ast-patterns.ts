export const nimAstPatterns: Array<{ pattern: string; description: string }> = [
	{ pattern: "\\bproc\\s+\\w+|\\bfunc\\s+\\w+", description: "Procedure/function definition" },
	{ pattern: "\\btemplate\\s+\\w+|\\bmacro\\s+\\w+", description: "Template or macro" },
	{ pattern: "\\btype\\s+\\w+", description: "Type definition" },
	{ pattern: "\\bobject\\b", description: "Object type" },
	{ pattern: "\\bimport\\b|\\binclude\\b", description: "Module import" },
	{ pattern: "\\bwhen\\b", description: "Conditional compilation" },
	{ pattern: "\\basync\\b|\\bawait\\b", description: "Async/await" }
];
