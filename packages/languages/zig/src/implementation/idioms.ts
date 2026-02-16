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
	},
	{
		name: "Sentinel-terminated slices",
		description: "Use sentinel values for C-compatible buffers."
	},
	{
		name: "No hidden allocations",
		description: "Avoid APIs that allocate without an explicit allocator."
	},
	{
		name: "Error sets",
		description: "Model expected failures with narrow error sets."
	}
];
