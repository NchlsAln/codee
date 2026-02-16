export function normTemplate(): string {
  return [
    "import norm/model",
    "type User = ref object of Model",
    "  name*: string"
  ].join("\n");
}
