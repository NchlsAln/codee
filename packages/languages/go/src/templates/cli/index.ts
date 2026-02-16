export function cliTemplate(): string {
  return "package main\n\nimport (\n  \"flag\"\n  \"fmt\"\n)\n\nfunc main() {\n  name := flag.String(\"name\", \"world\", \"name to greet\")\n  flag.Parse()\n  fmt.Printf(\"Hello, %s!\\n\", *name)\n}\n";
}
