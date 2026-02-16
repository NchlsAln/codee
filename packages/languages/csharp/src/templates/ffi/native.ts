export function ffiNativeTemplate(): string {
  return [
    "using System.Runtime.InteropServices;",
    "",
    "var handle = NativeLibrary.Load(\"nativecrypto\");",
    "Console.WriteLine(handle != IntPtr.Zero);",
    "NativeLibrary.Free(handle);"
  ].join("\n");
}
