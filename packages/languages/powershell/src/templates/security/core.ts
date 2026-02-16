export function securityTemplate(): string {
  return [
    "$cred = Get-Credential",
    "$secret = ConvertTo-SecureString 'P@ssw0rd' -AsPlainText -Force",
    "Protect-CmsMessage -To 'ops@example.com' -Content 'Rotate keys'"
  ].join("\n");
}
