export const ansibleIdioms: Array<{ name: string; description: string }> = [
  { name: "Idempotent tasks", description: "Write tasks that converge state safely." },
  { name: "Roles", description: "Organize tasks into reusable roles." },
  { name: "Handlers", description: "Use handlers for service restarts." },
  { name: "Variables", description: "Separate vars, defaults, and group_vars." },
  { name: "Jinja2", description: "Use templates for dynamic configuration." },
  { name: "Inventory", description: "Use inventory groups and host vars." },
];
