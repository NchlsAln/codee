export function asyncTemplate(): string {
  return [
    "import asyncdispatch",
    "proc fetch(): Future[string] {.async.} =",
    "  return \"ok\"",
    "",
    "echo waitFor(fetch())"
  ].join("\n");
}
