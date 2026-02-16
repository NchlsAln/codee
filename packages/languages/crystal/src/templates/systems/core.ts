export function systemsTemplate(): string {
  return [
    "@[Link(\"c\")]",
    "lib LibC",
    "  fun strlen(s : UInt8*) : Int32",
    "end",
    "ptr = Pointer(UInt8).malloc(16)",
    "ptr[0] = 65",
    "len = LibC.strlen(ptr)",
    "home = ENV[\"HOME\"]? || \"\"",
    "ptr.free",
    "len; home"
  ].join("\n");
}
