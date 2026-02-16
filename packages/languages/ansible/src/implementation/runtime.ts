export const ansibleRuntime = {
  name: "Ansible runtime",
  supportedVersions: ["2.15", "2.16"],
  executionModel: {
    transport: "SSH or WinRM",
    runner: "ansible-playbook execution",
    idempotency: "Tasks converge desired state",
  },
  dependencies: ["Python", "OpenSSH"],
  performance: {
    notes: ["Prefer async for long tasks", "Use facts sparingly", "Batch hosts"],
  },
};
