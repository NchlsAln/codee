export function ffiNativeTemplate(): string {
  return [
    "require 'fiddle'",
    "handle = Fiddle.dlopen('libc.so.6')",
    "puts handle.to_i"
  ].join("\n");
}
