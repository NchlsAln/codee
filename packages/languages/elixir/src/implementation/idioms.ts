export const elixirIdioms: Array<{ name: string; description: string }> = [
	{
		name: "Pattern matching",
		description: "Use match and case to destructure data."
	},
	{
		name: "Pipelines",
		description: "Chain transformations with |>."
	},
	{
		name: "Immutability",
		description: "Avoid mutation; return new values."
	},
	{
		name: "GenServer",
		description: "Model stateful processes with GenServer."
	},
	{
		name: "Supervision",
		description: "Structure fault tolerance with supervisors."
	},
	{
		name: "Tagged tuples",
		description: "Return {:ok, value} and {:error, reason} for expected errors."
	},
	{
		name: "Protocols",
		description: "Use protocols for polymorphism across types."
	},
	{
		name: "Structs",
		description: "Prefer structs for defined data shapes."
	},
	{
		name: "Behaviours",
		description: "Use behaviours to formalize callbacks."
	},
	{
		name: "Streams",
		description: "Use Stream for lazy pipelines and IO."
	}
];
