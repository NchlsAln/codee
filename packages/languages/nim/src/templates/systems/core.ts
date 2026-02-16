export function systemsTemplate(): string {
  return [
    "import std/os",
    "proc strlen(cstr: cstring): cint {.importc.}",
    "let p = cast[ptr int](allocShared0(sizeof(int)))",
    "p[] = 42",
    "deallocShared(p)",
    "let home = getEnv(\"HOME\", \"\")",
    "discard strlen(\"hi\")",
    "discard home"
  ].join("\n");
}
