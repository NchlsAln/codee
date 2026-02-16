export function mathTemplate(): string {
  return [
    "var radius = 3.0;",
    "var area = Math.PI * Math.Pow(radius, 2);",
    "var rounded = Math.Round(area, 2);",
    "Console.WriteLine(rounded);"
  ].join("\n");
}
