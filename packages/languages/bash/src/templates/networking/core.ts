export function networkingTemplate(): string {
  return [
    "curl -fsSL https://example.com/health",
    "wget -qO- https://example.com/api",
    "ss -tulpn | head -n 5"
  ].join("\n");
}
