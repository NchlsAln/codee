export const ocamlIdioms: Array<{ name: string; description: string }> = [
	{
		name: "Modules and functors",
		description: "Organize code with modules and use functors for parametrization."
	},
	{
		name: "Pattern matching",
		description: "Prefer match expressions over nested conditionals."
	},
	{
		name: "Variants",
		description: "Model domain data with algebraic data types."
	},
	{
		name: "Refs for state",
		description: "Use refs sparingly for mutable state."
	},
	{
		name: "Pipe operator",
		description: "Use |>, @@, and let bindings for readable pipelines."
	},
	{
		name: "Options and results",
		description: "Prefer option/result types for error handling."
	},
	{
		name: "Tail recursion",
		description: "Rewrite recursive functions to be tail-recursive for performance."
	}
];
