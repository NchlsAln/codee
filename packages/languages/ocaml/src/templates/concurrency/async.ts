export function asyncTemplate(): string {
  return [
    "open Lwt.Infix",
    "let fetch () = Lwt.return \"ok\"",
    "let () =",
    "  Lwt_main.run (fetch () >|= print_endline)"
  ].join("\n");
}
