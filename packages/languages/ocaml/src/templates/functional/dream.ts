export function dreamTemplate(): string {
  return [
    "let () =",
    "  Dream.run",
    "    (Dream.router [ Dream.get \"/health\" (fun _ -> Dream.html \"ok\") ])"
  ].join("\n");
}
