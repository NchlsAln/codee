export function mathTemplate(): string {
  return [
    "values = [1, 4, 9, 16]",
    "roots = values.map { |n| Math.sqrt(n) }",
    "avg = values.sum / values.length.to_f",
    "puts roots.join(',') + \" avg=\" + avg.to_s"
  ].join("\n");
}
