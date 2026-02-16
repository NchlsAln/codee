export function containersTemplate(): string {
  return [
    "docker::image { 'app':",
    "  image_tag => 'latest',",
    "}",
    "kubernetes::manifest { 'app-deploy':",
    "  ensure  => present,",
    "  content => file('manifests/app.yaml'),",
    "}",
    "helm::release { 'app':",
    "  chart => 'bitnami/nginx',",
    "}",
    "aws_ecs_service { 'app':",
    "  desired_count => 2,",
    "}",
  ].join("\n");
}
