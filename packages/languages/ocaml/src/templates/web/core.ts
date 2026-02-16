export function webTemplate(): string {
  return [
    "open Dream",
    "let () =",
    "  Dream.run",
    "  @@ Dream.logger",
    "  @@ Dream.router [",
    "       Dream.get \"/health\" (fun _ -> Dream.respond \"ok\");",
    "     ]"
  ].join("\n");
}
