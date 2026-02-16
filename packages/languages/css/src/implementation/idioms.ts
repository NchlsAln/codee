export const cssIdioms: Array<{ name: string; description: string }> = [
	{ name: "Mobile-first", description: "Start with base styles and add min-width media queries." },
	{ name: "BEM", description: "Use block__element--modifier naming for clarity." },
	{ name: "CSS variables", description: "Use :root variables for theming." },
	{ name: "Layout", description: "Prefer flexbox and grid for layout structures." },
	{ name: "Utility classes", description: "Use utilities for common spacing and typography." },
	{ name: "Reduce specificity", description: "Keep selectors shallow to avoid conflicts." },
	{ name: "Responsive units", description: "Use rem, %, clamp, and fluid scales." }
];
