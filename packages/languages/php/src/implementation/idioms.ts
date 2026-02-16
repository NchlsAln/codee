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
	},
	{
		name: "DTOs and value objects",
		description: "Prefer readonly properties and constructor promotion for data carriers."
	},
	{
		name: "Named arguments",
		description: "Use named arguments for clarity in long parameter lists."
	},
	{
		name: "Nullsafe operator",
		description: "Use ?-> and null coalescing (??) for safe access."
	},
	{
		name: "Match expressions",
		description: "Prefer match over switch for expressions with strict comparison."
	},
	{
		name: "PSR standards",
		description: "Follow PSR-12 formatting and PSR-4 autoloading."
	},
	{
		name: "Dependency injection",
		description: "Prefer constructor injection and container-managed services."
	}
];
