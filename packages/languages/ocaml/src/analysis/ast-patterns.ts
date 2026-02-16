export const ocamlAstPatterns: Array<{ pattern: string; description: string }> = [
	{ pattern: "\\blet\\b", description: "Let binding" },
	{ pattern: "\\btype\\s+\\w+", description: "Type definition" },
	{ pattern: "\\bmodule\\s+\\w+", description: "Module definition" },
	{ pattern: "\\bmatch\\b", description: "Pattern matching" },
	{ pattern: "\\bfun\\b", description: "Anonymous function" },
	{ pattern: "\\bopen\\b", description: "Module open" },
	{ pattern: "\\bref\\b|:=", description: "Mutable references" },
	{ pattern: "\\bmutable\\b", description: "Mutable record fields" },
	{ pattern: "Obj\\.magic", description: "Unsafe cast (safety risk)" },
	{ pattern: "List\\.hd|List\\.tl", description: "Partial list operations" },
	{ pattern: "\\bfailwith\\b|\\bassert\\b", description: "Failure paths" }
];
