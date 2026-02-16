export function asyncTemplate(): string {
  return [
    "ch = Channel{Int}(1)",
    "@async put!(ch, 42)",
    "println(take!(ch))"
  ].join("\n");
}
