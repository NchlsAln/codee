export const powershellIdioms: Array<{ name: string; description: string }> = [
	{ name: "Cmdlet naming", description: "Use Verb-Noun cmdlet names and approved verbs." },
	{ name: "Object pipeline", description: "Pass objects, not strings, between cmdlets." },
	{ name: "Splatting", description: "Use @params to pass named parameters cleanly." },
	{ name: "Advanced functions", description: "Use [CmdletBinding()] for rich parameters." },
	{ name: "Error handling", description: "Use try/catch and $ErrorActionPreference = 'Stop'." },
	{ name: "Providers", description: "Leverage providers for registry, filesystem, and certificates." },
	{ name: "Remoting", description: "Use Invoke-Command and Enter-PSSession for remote work." },
	{ name: "Structured output", description: "Use [pscustomobject]@{} for clean data." },
	{ name: "Type accelerators", description: "Annotate with [string], [int], [datetime]." }
];
