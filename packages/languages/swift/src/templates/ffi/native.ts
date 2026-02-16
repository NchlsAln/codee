export function ffiNativeTemplate(): string {
  return [
    "import Darwin",
    "",
    "let handle = dlopen(\"/usr/lib/libc.dylib\", RTLD_NOW)",
    "print(handle != nil)",
    "if let h = handle { dlclose(h) }"
  ].join("\n");
}
