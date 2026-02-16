export function systemAdminTemplate(): string {
  return [
    "Get-Process | Sort-Object CPU -Descending | Select-Object -First 5",
    "Get-Service | Where-Object Status -eq 'Running'",
    "Get-ScheduledTask | Select-Object -First 3"
  ].join("\n");
}
