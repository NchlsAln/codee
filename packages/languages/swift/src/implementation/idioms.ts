export const swiftIdioms: Array<{ name: string; description: string }> = [
	{
		name: "Value types",
		description: "Prefer structs and enums for predictable semantics."
	},
	{
		name: "Optionals",
		description: "Use optional binding and guard for safe unwrapping."
	},
	{
		name: "Protocol-oriented design",
		description: "Model behavior with protocols and extensions."
	},
	{
		name: "ARC",
		description: "Avoid retain cycles with weak/unowned references."
	},
	{
		name: "Swift concurrency",
		description: "Use async/await and Task groups for concurrent work."
	},
	{
		name: "Result builders",
		description: "Use result builders for DSLs like SwiftUI."
	},
	{
		name: "Extensions",
		description: "Extend types with focused functionality."
	},
	{
		name: "Codable",
		description: "Use Codable for JSON and data models."
	},
	{
		name: "Guard early exits",
		description: "Use guard statements for early exits."
	}
];
