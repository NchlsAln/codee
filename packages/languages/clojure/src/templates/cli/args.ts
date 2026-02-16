export function cliArgsTemplate(): string {
  return [
    "(def args *command-line-args*)",
    "(println args)"
  ].join("\n");
}
