export function cliArgsTemplate(): string {
  return "package main\n\nimport (\n  \"fmt\"\n\n  \"github.com/spf13/cobra\"\n)\n\nfunc main() {\n  var count int\n  root := &cobra.Command{\n    Use: \"app\",\n    Run: func(_ *cobra.Command, _ []string) { fmt.Println(count) },\n  }\n  root.Flags().IntVar(&count, \"count\", 1, \"count\")\n  _ = root.Execute()\n}\n";
}
