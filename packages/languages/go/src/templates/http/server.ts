export function httpServerTemplate(): string {
  return "package main\n\nimport (\n  \"net/http\"\n)\n\nfunc main() {\n  http.HandleFunc(\"/health\", func(w http.ResponseWriter, _ *http.Request) {\n    w.Write([]byte(\"ok\"))\n  })\n  _ = http.ListenAndServe(\":8080\", nil)\n}\n";
}
