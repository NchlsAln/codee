export function fileOperationsTemplate(): string {
  return [
    "mkdir -p backups",
    "cp config.yml backups/config.yml",
    "mv data.txt archive/data.txt",
    "chmod 640 backups/config.yml"
  ].join("\n");
}
