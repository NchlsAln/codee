export function ffiWasmTemplate(): string {
  return "package main\n\nimport (\n  \"syscall/js\"\n)\n\nfunc add(this js.Value, args []js.Value) any {\n  return args[0].Int() + args[1].Int()\n}\n\nfunc main() {\n  js.Global().Set(\"add\", js.FuncOf(add))\n  select {}\n}\n";
}
