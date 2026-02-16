export function parallelTemplate(): string {
  return [
    "import 'dart:isolate';",
    "",
    "final result = await Isolate.run(() => 1 + 1);",
    "print(result);"
  ].join("\n");
}
