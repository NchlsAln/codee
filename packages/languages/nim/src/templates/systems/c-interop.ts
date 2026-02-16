export function cInteropTemplate(): string {
  return [
    "proc puts(s: cstring): cint {.importc, header: \"stdio.h\"}.",
    "discard puts(\"hello\")"
  ].join("\n");
}
