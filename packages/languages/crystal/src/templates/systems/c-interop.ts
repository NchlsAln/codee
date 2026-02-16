export function cInteropTemplate(): string {
  return [
    "@[Link(\"c\")]",
    "lib LibC",
    "  fun puts(s : UInt8*) : Int32",
    "end",
    "LibC.puts(\"hi\")"
  ].join("\n");
}
