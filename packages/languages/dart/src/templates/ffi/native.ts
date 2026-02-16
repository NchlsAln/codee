export function ffiNativeTemplate(): string {
  return [
    "import 'dart:ffi';",
    "",
    "final lib = DynamicLibrary.open('nativecrypto');",
    "print(lib);"
  ].join("\n");
}
