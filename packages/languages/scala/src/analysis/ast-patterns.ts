export const scalaAstPatterns: Array<{ pattern: string; description: string }> = [
	{ pattern: "\\bcase\\s+class\\s+\\w+", description: "Case class declaration" },
	{ pattern: "\\bsealed\\s+trait\\s+\\w+", description: "Sealed trait" },
	{ pattern: "\\bdef\\s+\\w+\\s*\\(", description: "Method definition" },
	{ pattern: "\\bmatch\\s*\\{", description: "Pattern match" },
	{ pattern: "\\bfor\\s*\\(.*\\)\\s+yield", description: "For-comprehension" },
	{ pattern: "\\bimplicit\\b|\\bgiven\\b", description: "Implicit or given" },
	{ pattern: "\\bunsafeRunSync\\b", description: "Unsafe effect execution" },
	{ pattern: "\\bvar\\s+\\w+", description: "Mutable variable" },
	{ pattern: "\\bnull\\b", description: "Null usage (smell)" },
	{ pattern: "\\bTry\\s*\\(", description: "Try for exceptions" },
	{ pattern: "\\bFuture\\s*\\(", description: "Future usage" }
];
