export function ffiTemplate(): string {
  return [
    "@[Link(\"c\")]",
    "lib LibC",
    "  fun puts(s : UInt8*) : Int32",
    "end",
    "LibC.puts(\"hi\")",
    "@[Link(\"m\")]",
    "lib LibM",
    "  fun sqrt(x : Float64) : Float64",
    "end",
    "LibM.sqrt(9.0)"
  ].join("\n");
}
