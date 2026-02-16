export function asyncTemplate(): string {
  return [
    "parfor i = 1:4",
    "  disp(i);",
    "end"
  ].join("\n");
}
