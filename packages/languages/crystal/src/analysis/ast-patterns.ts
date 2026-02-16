export const crystalAstPatterns: Array<{ pattern: string; description: string }> = [
	{ pattern: "\\bclass\\s+\\w+|\\bmodule\\s+\\w+", description: "Type definition" },
	{ pattern: "\\bdef\\s+\\w+", description: "Method definition" },
	{ pattern: "\\bmacro\\s+\\w+", description: "Macro definition" },
	{ pattern: "\\blib\\s+\\w+", description: "C binding" },
	{ pattern: "\\bspawn\\b|\\bChannel\\b", description: "Concurrency primitive" },
	{ pattern: "\\brequire\\b", description: "Require directive" }
];
