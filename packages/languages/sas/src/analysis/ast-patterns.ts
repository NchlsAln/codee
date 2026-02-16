export const sasAstPatterns: Array<{ pattern: string; description: string }> = [
	{ pattern: "\\bDATA\\s+\\w+", description: "DATA step" },
	{ pattern: "\\bSET\\b", description: "SET statement" },
	{ pattern: "\\bPROC\\s+\\w+", description: "PROC step" },
	{ pattern: "\\bRUN\\b|\\bQUIT\\b", description: "Step terminator" },
	{ pattern: "\\bLIBNAME\\b", description: "Library assignment" },
	{ pattern: "%\\bMACRO\\b|%\\bMEND\\b", description: "Macro definition" },
	{ pattern: "%\\bDO\\b|%\\bEND\\b", description: "Macro control flow" },
	{ pattern: "\\bCALL\\s+EXECUTE\\b", description: "Dynamic execution (review)" },
	{ pattern: "\\bFORMAT\\b|\\bINFORMAT\\b", description: "Formats/informats" },
	{ pattern: "\\bMERGE\\b|\\bBY\\b", description: "Merge/join" }
];
