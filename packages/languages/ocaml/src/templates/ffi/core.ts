export function ffiTemplate(): string {
  return [
    "open Ctypes",
    "open Foreign",
    "let abs_int = foreign \"abs\" (int @-> returning int)",
    "let _ = abs_int (-3)"
  ].join("\n");
}
