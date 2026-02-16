export const yamlIdioms: Array<{ name: string; description: string }> = [
	{ name: "Indentation", description: "Use consistent indentation (2 spaces is common)." },
	{ name: "Anchors and aliases", description: "Use anchors to reduce duplication." },
	{ name: "Explicit types", description: "Quote strings that look like numbers or booleans." },
	{ name: "Multi-line strings", description: "Use | for literal blocks and > for folded." },
	{ name: "Kubernetes style", description: "Use apiVersion/kind/metadata/spec conventions." },
	{ name: "Lists", description: "Keep list items aligned and avoid mixed types." }
];
