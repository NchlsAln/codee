export const erlangIdioms: Array<{ name: string; description: string }> = [
	{
		name: "Pattern matching",
		description: "Match on tuples and lists for control flow."
	},
	{
		name: "Guards",
		description: "Use guard clauses to refine pattern matches."
	},
	{
		name: "Recursion",
		description: "Prefer recursion over loops, using tail recursion when possible."
	},
	{
		name: "Atoms",
		description: "Use atoms for identifiers and tagged tuples."
	},
	{
		name: "Message passing",
		description: "Communicate via send/receive between processes."
	},
	{
		name: "Supervisors",
		description: "Model fault tolerance with supervisors and restart strategies."
	},
	{
		name: "Behaviours",
		description: "Use behaviour callbacks (gen_server, gen_statem) for structure."
	},
	{
		name: "Records and maps",
		description: "Prefer maps for modern data shapes; use records for legacy code."
	},
	{
		name: "ETS",
		description: "Use ETS for shared read-heavy data."
	}
];
