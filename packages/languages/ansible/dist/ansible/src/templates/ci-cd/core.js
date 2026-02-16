"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cicdTemplate = cicdTemplate;
function cicdTemplate() {
  return [
    "- name: CI/CD",
    "  hosts: localhost",
    "  tasks:",
    "    - name: CodePipeline",
    "      amazon.aws.codepipeline:",
    "        name: app-pipeline",
    "        state: present",
    "    - name: GitLab project hook",
    "      community.general.gitlab_project_hook:",
    "        project: app",
    "        url: https://ci.example.com",
    "    - name: ArgoCD app",
    "      community.kubernetes.helm:",
    "        name: argocd",
    "        chart_ref: argo/argo-cd",
    "    - name: Spinnaker deploy",
    "      community.general.spinnaker:",
    "        application: app",
    "        state: present",
  ].join("\n");
}
