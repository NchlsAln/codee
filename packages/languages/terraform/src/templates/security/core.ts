export function securityTemplate(): string {
  return [
    'data "aws_iam_policy_document" "assume" { statement { actions = ["sts:AssumeRole"] principals { type = "Service" identifiers = ["ec2.amazonaws.com"] } } }',
    'resource "aws_iam_role" "app" { name = "app-role" assume_role_policy = data.aws_iam_policy_document.assume.json }',
    'resource "aws_iam_policy" "app" { name = "app-policy" policy = "{}" }',
    'resource "aws_kms_key" "app" { description = "app key" }',
    'resource "aws_secretsmanager_secret" "db" { name = "db-password" }',
  ].join("\n");
}
