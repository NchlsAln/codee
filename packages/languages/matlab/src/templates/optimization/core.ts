export function optimizationTemplate(): string {
  return [
    "f = [3 2];",
    "A = [2 1; 1 1];",
    "b = [100; 80];",
    "x = linprog(f, A, b);",
    "disp(x)"
  ].join("\n");
}
