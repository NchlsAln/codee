export const swiftAstPatterns: Array<{ pattern: string; description: string }> = [
	{ pattern: "\\bstruct\\s+\\w+", description: "Struct declaration" },
	{ pattern: "\\bprotocol\\s+\\w+", description: "Protocol declaration" },
	{ pattern: "\\benum\\s+\\w+", description: "Enum declaration" },
	{ pattern: "\\bguard\\b", description: "Guard statement" },
	{ pattern: "\\bextension\\s+\\w+", description: "Extension declaration" },
	{ pattern: "\\basync\\s+throws\\b|\\basync\\b", description: "Async function" },
	{ pattern: "\\bTask\\b", description: "Task usage" },
	{ pattern: "\\bActor\b|\\bactor\\b", description: "Actor declaration" },
	{ pattern: "\\bCodable\\b", description: "Codable conformance" },
	{ pattern: "\\bResult\\b", description: "Result type" }
];
