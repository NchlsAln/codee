export function networkingTemplate(): string {
  return [
    "curl -s https://example.com | sed -n '1,5p'",
    "ss -tulpn | sed -n '1,3p'"
  ].join("\n");
}
