export const juliaAstPatterns: Array<{ pattern: string; description: string }> = [
	{ pattern: "\\bfunction\\s+\\w+", description: "Function definition" },
	{ pattern: "\\bstruct\\s+\\w+", description: "Struct definition" },
	{ pattern: "::", description: "Type annotation" },
	{ pattern: "\\bmacro\\s+\\w+", description: "Macro definition" },
	{ pattern: "\\b@\\w+", description: "Macro invocation" },
	{ pattern: "\\busing\\b|\\bimport\\b", description: "Module import" },
	{ pattern: "\\bAny\\b|::Any", description: "Type instability risk" },
	{ pattern: "\\b@inbounds\\b|\\b@views\\b", description: "Bounds/array view optimizations" },
	{ pattern: "\\b@time\\b|\\b@btime\\b", description: "Performance measurement" },
	{ pattern: "\\bThreads\\.@threads\\b", description: "Threaded loop" },
	{ pattern: "\\bChannel\\b", description: "Channel usage" }
];
