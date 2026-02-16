"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.containersTemplate = containersTemplate;
function containersTemplate() {
  return [
    "docker_image 'app' do",
    "  tag 'latest'",
    "end",
    "kubernetes_manifest 'app-deploy' do",
    "  yaml_path '/etc/k8s/app.yaml'",
    "end",
    "helm_release 'app' do",
    "  chart 'bitnami/nginx'",
    "end",
    "aws_ecs_service 'app' do",
    "  desired_count 2",
    "end",
  ].join("\n");
}
