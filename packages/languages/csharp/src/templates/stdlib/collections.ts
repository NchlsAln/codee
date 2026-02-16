export function collectionsTemplate(): string {
  return [
    "using System.Collections.Generic;",
    "using System.Linq;",
    "",
    "var values = new List<int> { 1, 2, 3, 4 };",
    "var evens = values.Where(v => v % 2 == 0).ToList();",
    "var total = values.Sum();",
    "Console.WriteLine(string.Join(\",\", evens));",
    "Console.WriteLine(total);"
  ].join("\n");
}
