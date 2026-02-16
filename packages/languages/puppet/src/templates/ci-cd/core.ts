export function cicdTemplate(): string {
  return [
    "aws_codepipeline { 'app-pipeline':",
    "  state => 'present',",
    "}",
    "gitlab::hook { 'app-hook':",
    "  project => 'app',",
    "  url     => 'https://ci.example.com',",
    "}",
    "argocd::application { 'app':",
    "  repo_url => 'https://github.com/org/app',",
    "  path     => 'k8s',",
    "}",
    "spinnaker::application { 'app':",
    "  ensure => present,",
    "}",
  ].join("\n");
}
