"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cicdTemplate = cicdTemplate;
function cicdTemplate() {
  return [
    "aws_codepipeline 'app-pipeline' do",
    "  name 'app-pipeline'",
    "end",
    "gitlab_project_hook 'app-hook' do",
    "  project 'app'",
    "  url 'https://ci.example.com'",
    "end",
    "argocd_application 'app' do",
    "  repo_url 'https://github.com/org/app'",
    "  path 'k8s'",
    "end",
    "spinnaker_application 'app' do",
    "  ensure :present",
    "end",
  ].join("\n");
}
