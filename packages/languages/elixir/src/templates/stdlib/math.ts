export function mathTemplate(): string {
  return [
    "values = [1, 4, 9, 16]",
    "roots = Enum.map(values, &(:math.sqrt(&1)))",
    "avg = Enum.sum(values) / length(values)",
    "IO.inspect({roots, avg})"
  ].join("\n");
}
