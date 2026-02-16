export function authTemplate(): string {
  return "package main\n\nimport (\n  \"net/http\"\n)\n\nfunc requireToken(next http.Handler) http.Handler {\n  return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {\n    if r.Header.Get(\"Authorization\") != \"Bearer secret\" {\n      w.WriteHeader(http.StatusForbidden)\n      return\n    }\n    next.ServeHTTP(w, r)\n  })\n}\n";
}
