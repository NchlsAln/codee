export function ioTemplate(): string {
  return [
    "using System.IO;",
    "",
    "var path = \"data.txt\";",
    "var text = File.ReadAllText(path);",
    "File.WriteAllText(path, text + \"\\nmore\");",
    "Console.WriteLine(text);"
  ].join("\n");
}
