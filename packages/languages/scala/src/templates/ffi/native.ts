export function ffiNativeTemplate(): string {
  return [
    "object NativeCrypto {",
    "  System.loadLibrary(\"nativecrypto\")",
    "  @native def hash(input: String): Array[Byte]",
    "}",
    "",
    "val bytes = NativeCrypto.hash(\"data\")",
    "println(bytes.length)"
  ].join("\n");
}
