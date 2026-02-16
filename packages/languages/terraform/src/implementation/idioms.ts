export const terraformIdioms: Array<{ name: string; description: string }> = [
  { name: "Declarative resources", description: "Describe desired state, not steps." },
  { name: "Modules", description: "Use modules for reuse and composition." },
  { name: "State management", description: "Store state remotely with locking." },
  { name: "Provider pinning", description: "Pin provider versions for stability." },
  { name: "Workspaces", description: "Use workspaces for env isolation." },
  { name: "Variables", description: "Use variables and tfvars for configuration." },
];
