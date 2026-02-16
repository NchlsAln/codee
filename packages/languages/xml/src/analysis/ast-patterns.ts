export const xmlAstPatterns: Array<{ pattern: string; description: string }> = [
	{ pattern: "<\\?xml", description: "XML declaration" },
	{ pattern: "xmlns:", description: "Namespace declaration" },
	{ pattern: "xsi:schemaLocation", description: "Schema location" },
	{ pattern: "<!DOCTYPE", description: "DOCTYPE (consider security)" },
	{ pattern: "<[^/!][^>]*>", description: "Element start" },
	{ pattern: "</[^>]+>", description: "Element end" },
	{ pattern: "&\\w+;", description: "Entity usage" }
];
