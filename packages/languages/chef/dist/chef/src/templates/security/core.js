"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.securityTemplate = securityTemplate;
function securityTemplate() {
  return [
    "aws_iam_role 'app-role' do",
    "  assume_role_policy '{}'",
    "end",
    "aws_iam_policy 'app-policy' do",
    "  policy '{}'",
    "end",
    "aws_kms_key 'app-key' do",
    "  description 'app key'",
    "end",
    "aws_secretsmanager_secret 'db-password' do",
    "  name 'db-password'",
    "end",
    "vault_policy 'app' do",
    '  rules \'path "secret/*" { capabilities = ["read"] }\'',
    "end",
  ].join("\n");
}
