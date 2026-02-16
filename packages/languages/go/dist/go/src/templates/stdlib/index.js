"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stdlibTemplate = stdlibTemplate;
function stdlibTemplate() {
    return "package main\n\nimport (\n  \"encoding/json\"\n  \"net/http\"\n)\n\nfunc health(w http.ResponseWriter, _ *http.Request) {\n  w.Header().Set(\"Content-Type\", \"application/json\")\n  _ = json.NewEncoder(w).Encode(map[string]bool{\"ok\": true})\n}\n\nfunc main() {\n  http.HandleFunc(\"/health\", health)\n  _ = http.ListenAndServe(\":8080\", nil)\n}\n";
}
