export const sedIdioms: Array<{ name: string; description: string }> = [
	{ name: "Address ranges", description: "Use 1,10 or /start/,/end/ to target ranges." },
	{ name: "Substitution", description: "Use s/old/new/g with flags for replacements." },
	{ name: "Suppress default", description: "Use -n and explicit p for controlled output." },
	{ name: "Hold space", description: "Use h/H/g/G/x for multi-line transforms." },
	{ name: "Branching", description: "Use b and t for conditional flow." },
	{ name: "In-place edits", description: "Use -i carefully; note GNU vs BSD syntax." },
	{ name: "Extended regex", description: "Use -E/-r and document portability." },
	{ name: "Scripts", description: "Move complex logic into -f scripts for readability." }
];
