export const ansibleAstPatterns: Array<{ pattern: string; description: string }> = [
  { pattern: "\\bhosts\\s*:", description: "Playbook hosts" },
  { pattern: "\\btasks\\s*:", description: "Tasks section" },
  { pattern: "\\broles\\s*:", description: "Roles usage" },
  { pattern: "\\bhandlers\\s*:", description: "Handlers section" },
  { pattern: "\\bbecome\\s*:", description: "Privilege escalation" },
  { pattern: "\\bansible-vault\\b|\\bvault\\b", description: "Vault usage" },
  { pattern: "\\bshell\\s*:", description: "Shell module (idempotency risk)" },
  { pattern: "\\bcommand\\s*:", description: "Command module (idempotency risk)" },
];
