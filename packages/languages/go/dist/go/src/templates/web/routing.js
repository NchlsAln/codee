"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routingTemplate = routingTemplate;
function routingTemplate() {
    return "package main\n\nimport (\n  \"encoding/json\"\n  \"net/http\"\n)\n\nfunc item(w http.ResponseWriter, r *http.Request) {\n  _ = json.NewEncoder(w).Encode(map[string]any{\"id\": r.URL.Query().Get(\"id\")})\n}\n\nfunc main() {\n  http.HandleFunc(\"/item\", item)\n  _ = http.ListenAndServe(\":8080\", nil)\n}\n";
}
