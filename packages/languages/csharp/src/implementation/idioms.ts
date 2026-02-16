export const csharpIdioms: Array<{ name: string; description: string }> = [
	{
		name: "Async/await",
		description: "Use async Task methods for IO and avoid blocking threads."
	},
	{
		name: "LINQ",
		description: "Use LINQ for collection transformations and queries."
	},
	{
		name: "Records",
		description: "Prefer record types for immutable data models."
	},
	{
		name: "Pattern matching",
		description: "Use switch expressions and type patterns for control flow."
	},
	{
		name: "IDisposable",
		description: "Use using statements for deterministic cleanup."
	},
	{
		name: "Nullable reference types",
		description: "Enable nullability and avoid nulls by design."
	},
	{
		name: "File-scoped namespaces",
		description: "Prefer file-scoped namespaces for clean files."
	},
	{
		name: "Span<T>",
		description: "Use Span and Memory for low-allocation hot paths."
	},
	{
		name: "Minimal APIs",
		description: "Use MapGet/MapPost for simple HTTP services."
	}
];
