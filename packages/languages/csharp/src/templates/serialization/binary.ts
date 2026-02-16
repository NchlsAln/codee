export function binaryTemplate(): string {
  return [
    "using MessagePack;",
    "",
    "var data = MessagePackSerializer.Serialize(new[] { 1, 2, 3 });",
    "var items = MessagePackSerializer.Deserialize<int[]>(data);",
    "Console.WriteLine(items.Length);"
  ].join("\n");
}
