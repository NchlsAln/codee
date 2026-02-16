export const scssIdioms: Array<{ name: string; description: string }> = [
	{ name: "Variables", description: "Use $variables for colors, spacing, and fonts." },
	{ name: "Nesting", description: "Keep nesting shallow to avoid specificity issues." },
	{ name: "Mixins", description: "Use mixins for reusable patterns with parameters." },
	{ name: "Partials", description: "Split into _partial.scss files and @use them." },
	{ name: "Functions", description: "Create functions for computed values." },
	{ name: "Extends", description: "Use @extend sparingly to avoid selector bloat." }
];
