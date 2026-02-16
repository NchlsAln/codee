export function ffiTemplate(): string {
  return [
    "proc c_abs(x: cint): cint {.importc: \"abs\", header: \"stdlib.h\".}",
    "let v = c_abs(-3)",
    "const lib = loadLib(\"libm.so\")",
    "discard v; discard lib"
  ].join("\n");
}
