export function dataExtractionTemplate(): string {
  return [
    "$rows = Import-Csv .\\data.csv",
    "$rows | Where-Object { $_.Status -eq 'ERROR' }",
    "$json = Get-Content .\\data.json | ConvertFrom-Json"
  ].join("\n");
}
