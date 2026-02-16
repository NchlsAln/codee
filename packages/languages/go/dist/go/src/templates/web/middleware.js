"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.middlewareTemplate = middlewareTemplate;
function middlewareTemplate() {
    return "package main\n\nimport (\n  \"log\"\n  \"net/http\"\n)\n\nfunc withLogging(next http.Handler) http.Handler {\n  return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {\n    log.Printf(\"%s %s\", r.Method, r.URL.Path)\n    next.ServeHTTP(w, r)\n  })\n}\n";
}
