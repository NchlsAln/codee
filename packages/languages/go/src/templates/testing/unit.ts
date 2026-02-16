export function unitTemplate(): string {
  return "package main\n\nimport \"testing\"\n\nfunc add(a, b int) int { return a + b }\n\nfunc TestAdd(t *testing.T) {\n  if add(2, 3) != 5 {\n    t.Fatal(\"unexpected result\")\n  }\n}\n";
}
