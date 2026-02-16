export function ioTemplate(): string {
  return [
    "(def path \"data.txt\")",
    "(spit path \"hello\\n\" :append true)",
    "(println (slurp path))"
  ].join("\n");
}
