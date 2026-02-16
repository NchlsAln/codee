export function asyncTemplate(): string {
  return [
    "require 'async'",
    "Async do",
    "  task = Async do",
    "    42",
    "  end",
    "  puts task.wait",
    "end"
  ].join("\n");
}
