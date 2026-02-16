"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.securityTemplate = securityTemplate;
function securityTemplate() {
  return [
    "- name: Security",
    "  hosts: localhost",
    "  tasks:",
    "    - name: IAM role",
    "      amazon.aws.iam_role:",
    "        name: app-role",
    "        state: present",
    "    - name: IAM policy",
    "      amazon.aws.iam_policy:",
    "        iam_type: role",
    "        iam_name: app-role",
    "        policy_name: app-policy",
    "    - name: KMS key",
    "      amazon.aws.kms_key:",
    "        alias: alias/app",
    "    - name: Secrets Manager",
    "      amazon.aws.secretsmanager_secret:",
    "        name: db-password",
    "    - name: Vault policy",
    "      community.hashi_vault.vault_policy:",
    "        name: app",
  ].join("\n");
}
