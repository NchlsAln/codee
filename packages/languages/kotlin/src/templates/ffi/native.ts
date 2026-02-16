export function ffiNativeTemplate(): string {
  return [
    "import kotlinx.cinterop.*",
    "",
    "fun main() {",
    "  val value = 42",
    "  memScoped {",
    "    val ptr = alloc<IntVar>()",
    "    ptr.value = value",
    "    println(ptr.value)",
    "  }",
    "}"
  ].join("\n");
}
