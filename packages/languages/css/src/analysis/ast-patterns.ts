export const cssAstPatterns: Array<{ pattern: string; description: string }> = [
	{ pattern: "!important", description: "High specificity override" },
	{ pattern: "#[\\w-]+\\s+[.#]", description: "Potential specificity escalation" },
	{ pattern: "\\*\\s*{", description: "Universal selector usage" },
	{ pattern: "@media", description: "Responsive rules" },
	{ pattern: "@keyframes", description: "Animations" },
	{ pattern: "will-change", description: "Performance hint" },
	{ pattern: "position:\\s*fixed", description: "Fixed positioning (check layout)" },
	{ pattern: "\\bfloat\\b", description: "Legacy layout" }
];
