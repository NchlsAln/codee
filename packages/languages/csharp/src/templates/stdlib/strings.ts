export function stringsTemplate(): string {
  return [
    "var raw = \"  CSharp  \";",
    "var trimmed = raw.Trim();",
    "var upper = trimmed.ToUpperInvariant();",
    "var parts = trimmed.Split('a');",
    "var interpolated = $\"value={upper}\";",
    "Console.WriteLine(string.Join(\",\", parts));",
    "Console.WriteLine(interpolated);"
  ].join("\n");
}
