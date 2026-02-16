export function parallelTemplate(): string {
  return [
    "var tasks = Enumerable.Range(1, 3).Select(async n => n * 2);",
    "var results = await Task.WhenAll(tasks);",
    "Console.WriteLine(string.Join(\",\", results));"
  ].join("\n");
}
