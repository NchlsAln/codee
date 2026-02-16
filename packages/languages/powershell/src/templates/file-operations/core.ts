export function fileOperationsTemplate(): string {
  return [
    "New-Item -ItemType Directory -Path backups -Force",
    "Copy-Item -Path .\\config.yml -Destination backups\\config.yml",
    "Move-Item -Path .\\data.txt -Destination .\\archive\\data.txt",
    "(Get-Acl .\\config.yml).Access"
  ].join("\n");
}
