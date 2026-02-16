export function gorillaTemplate(): string {
  return "package main\n\nimport (\n  \"encoding/json\"\n  \"net/http\"\n\n  \"github.com/gorilla/mux\"\n)\n\nfunc health(w http.ResponseWriter, _ *http.Request) {\n  w.Header().Set(\"Content-Type\", \"application/json\")\n  _ = json.NewEncoder(w).Encode(map[string]bool{\"ok\": true})\n}\n\nfunc main() {\n  router := mux.NewRouter()\n  router.HandleFunc(\"/health\", health).Methods(http.MethodGet)\n  _ = http.ListenAndServe(\":8080\", router)\n}\n";
}
