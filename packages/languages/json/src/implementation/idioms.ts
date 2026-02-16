export const jsonIdioms: Array<{ name: string; description: string }> = [
	{ name: "Schema-first", description: "Define JSON Schema to validate payloads." },
	{ name: "Stable keys", description: "Use consistent field names and types." },
	{ name: "Null handling", description: "Explicitly model null vs omitted fields." },
	{ name: "Pretty vs compact", description: "Pretty print for humans, compact for transport." },
	{ name: "Versioning", description: "Version payloads for backward compatibility." },
	{ name: "Arrays of objects", description: "Prefer arrays of objects over parallel arrays." }
];
