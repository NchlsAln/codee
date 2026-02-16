export const phpIdioms: Array<{ name: string; description: string }> = [
	{
		name: "$variables",
		description: "Use $-prefixed variables and prefer typed properties."
	},
	{
		name: "Array literals",
		description: "Use [] for arrays and associative arrays for maps."
	},
	{
		name: "Object access",
		description: "Use -> for instance members and :: for static members."
	},
	{
		name: "Strict types",
		description: "Enable strict_types=1 and add parameter/return types."
	},
	{
		name: "Closures",
		description: "Use use(...) to capture variables in anonymous functions."
	}
];
