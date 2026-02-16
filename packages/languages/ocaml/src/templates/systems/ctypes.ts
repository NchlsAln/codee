export function ctypesTemplate(): string {
  return [
    "open Ctypes",
    "open Foreign",
    "let puts = foreign \"puts\" (string @-> returning int)",
    "let () = ignore (puts \"hi\")"
  ].join("\n");
}
