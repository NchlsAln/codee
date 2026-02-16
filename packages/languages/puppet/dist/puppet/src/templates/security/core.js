"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.securityTemplate = securityTemplate;
function securityTemplate() {
  return [
    "aws_iam_role { 'app-role':",
    "  assume_role_policy => '{}',",
    "}",
    "aws_iam_policy { 'app-policy':",
    "  policy => '{}',",
    "}",
    "aws_kms_key { 'app-key':",
    "  description => 'app key',",
    "}",
    "aws_secretsmanager_secret { 'db-password':",
    "  name => 'db-password',",
    "}",
    "vault::policy { 'app':",
    '  rules => \'path \\"secret/*\\" { capabilities = [\\"read\\"] }\',',
    "}",
  ].join("\n");
}
