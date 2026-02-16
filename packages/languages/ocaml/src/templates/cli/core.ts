export function cliTemplate(): string {
  return [
    "open Arg",
    "let name = ref \"\"",
    "let specs = [\"-n\", Set_string name, \"name\"]",
    "let () = parse specs (fun _ -> ()) \"demo\"",
    "open Yojson.Safe",
    "let cfg = from_string \"{\\\"ok\\\":true}\"",
    "ignore cfg"
  ].join("\n");
}
