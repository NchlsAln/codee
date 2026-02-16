export function ioTemplate(): string {
  return [
    "path = Path.join(__DIR__, \"data.txt\")",
    "File.write!(path, \"hello\\n\", [:append])",
    "IO.puts(File.read!(path))"
  ].join("\n");
}
