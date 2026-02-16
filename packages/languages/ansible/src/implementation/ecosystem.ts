export const ansibleEcosystem = {
  fileExtensions: [".yml", ".yaml", ".ansible.yml"],
  paradigms: ["declarative", "idempotent"],
  registry: ["Ansible Galaxy"],
  collections: ["community.general", "ansible.posix"],
  inventory: ["static", "dynamic"],
  secrets: ["ansible-vault"],
  tooling: ["ansible-lint", "molecule"],
  orchestration: ["AWX", "Tower"],
  deploymentTargets: ["servers", "network devices", "cloud"],
};
