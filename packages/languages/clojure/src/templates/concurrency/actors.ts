export function actorsTemplate(): string {
  return [
    "(def counter (agent 0))",
    "(send counter inc)",
    "(await counter)",
    "(println @counter)"
  ].join("\n");
}
