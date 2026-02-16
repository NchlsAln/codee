export function cicdTemplate(): string {
  return [
    'resource "aws_codepipeline" "app" { name = "app-pipeline" role_arn = aws_iam_role.app.arn }',
    'resource "aws_codebuild_project" "app" { name = "app-build" service_role = aws_iam_role.app.arn }',
    'resource "aws_codedeploy_app" "app" { name = "app" compute_platform = "Server" }',
    'resource "aws_codedeploy_deployment_group" "app" { app_name = aws_codedeploy_app.app.name deployment_group_name = "app" }',
    'resource "argocd_application" "app" { metadata { name = "app" } spec { destination { namespace = "default" } } }',
  ].join("\n");
}
