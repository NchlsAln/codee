export const zigIdioms: Array<{ name: string; description: string }> = [
	{
		name: "Explicit error handling",
		description: "Use error unions with try/catch for explicit control flow."
	},
	{
		name: "Allocator passing",
		description: "Thread allocators explicitly instead of hidden globals."
	},
	{
		name: "Comptime metaprogramming",
		description: "Use comptime and inline for for compile-time logic."
	},
	{
		name: "Defer and errdefer",
		description: "Use defer/errdefer for deterministic cleanup."
	}
];
