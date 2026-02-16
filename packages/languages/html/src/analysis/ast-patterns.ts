export const htmlAstPatterns: Array<{ pattern: string; description: string }> = [
	{ pattern: "<img(?![^>]*alt=)", description: "Image missing alt text" },
	{ pattern: "<a(?![^>]*href=)", description: "Anchor without href" },
	{ pattern: "<button[^>]*>\s*<a", description: "Nested interactive elements" },
	{ pattern: "<div[^>]*>\s*<div", description: "Deep div nesting (consider semantics)" },
	{ pattern: "<h[2-6]", description: "Heading hierarchy (verify order)" },
	{ pattern: "aria-\\w+", description: "ARIA attributes present" },
	{ pattern: "role=\"presentation\"|role=\"none\"", description: "ARIA presentation roles" }
];
