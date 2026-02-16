export const clojureIdioms: Array<{ name: string; description: string }> = [
	{
		name: "Immutable collections",
		description: "Favor persistent vectors, maps, and sets over mutation."
	},
	{
		name: "Threading macros",
		description: "Use -> and ->> to express pipelines."
	},
	{
		name: "Destructuring",
		description: "Destructure maps/vectors in bindings and fn args."
	},
	{
		name: "Protocols",
		description: "Define polymorphism with defprotocol/extend-type."
	},
	{
		name: "Multimethods",
		description: "Use defmulti/defmethod for flexible dispatch."
	},
	{
		name: "STM and agents",
		description: "Use atoms/refs/agents for coordinated state updates."
	},
	{
		name: "Transducers",
		description: "Use transducers for allocation-free transformations."
	},
	{
		name: "Spec",
		description: "Use clojure.spec for validation and generative testing."
	},
	{
		name: "Avoid reflection",
		description: "Add type hints to remove reflective calls."
	},
	{
		name: "Java interop",
		description: "Use interop sparingly and isolate in namespaces."
	}
];
