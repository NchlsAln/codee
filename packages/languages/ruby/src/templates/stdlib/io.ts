export function ioTemplate(): string {
  return [
    "path = File.join(__dir__, 'data.txt')",
    "File.write(path, \"hello\\n\", mode: 'a')",
    "puts File.read(path)"
  ].join("\n");
}
