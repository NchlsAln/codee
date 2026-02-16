export function dataExtractionTemplate(): string {
  return [
    "sed -n 's/^user=\\([^ ]*\\).*/\\1/p' app.log",
    "sed -n 's/.*,\\([^,]*\\)$/\\1/p' data.csv"
  ].join("\n");
}
