export const kotlinIdioms: Array<{ name: string; description: string }> = [
	{
		name: "Data classes",
		description: "Use data classes for immutable value objects with generated equals/hashCode."
	},
	{
		name: "Null safety",
		description: "Prefer non-null types and use ?. and ?: for safe access and defaults."
	},
	{
		name: "Extension functions",
		description: "Add focused behavior to existing types without inheritance."
	},
	{
		name: "Sealed hierarchies",
		description: "Model closed sets of variants with sealed classes or interfaces."
	},
	{
		name: "Coroutines",
		description: "Use suspend functions and structured concurrency for async work."
	},
	{
		name: "val over var",
		description: "Prefer val for immutability and clearer intent."
	},
	{
		name: "Result and sealed errors",
		description: "Use sealed classes or Result for expected failures."
	},
	{
		name: "Scopes and receivers",
		description: "Use apply/also/let/run for scoped configuration."
	},
	{
		name: "Flows",
		description: "Use Flow for cold streams with structured cancellation."
	},
	{
		name: "Prefer data immutability",
		description: "Favor immutable collections and copy for updates."
	},
	{
		name: "KDoc",
		description: "Document public APIs with KDoc."
	}
];
