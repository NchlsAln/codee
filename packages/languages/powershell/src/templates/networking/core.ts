export function networkingTemplate(): string {
  return [
    "Invoke-RestMethod https://example.com/api/health",
    "Invoke-WebRequest https://example.com",
    "Test-NetConnection -ComputerName example.com -Port 443"
  ].join("\n");
}
