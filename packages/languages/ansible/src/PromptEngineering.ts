import { BasePromptEngineering } from "@codee/lang-common";

export class PromptEngineering extends BasePromptEngineering {
  constructor() {
    super("ansible", {
      systemPrompt:
        "You are an Ansible expert. Emphasize idempotent tasks, clear roles, and secure automation.",
      fewShotExamples: [
        {
          task: "Install package",
          input: "nginx",
          output:
            "- name: Install nginx\n  ansible.builtin.package:\n    name: nginx\n    state: present",
        },
        {
          task: "Template",
          input: "deploy config",
          output:
            "- name: Render config\n  ansible.builtin.template:\n    src: app.conf.j2\n    dest: /etc/app.conf",
        },
      ],
      contextHints: [
        "Prefer modules over shell/command for idempotency.",
        "Use handlers for restarts and notifications.",
        "Store secrets in ansible-vault.",
        "Separate vars by environment with group_vars.",
        "Keep playbooks small and role-driven.",
      ],
    });
  }
}
