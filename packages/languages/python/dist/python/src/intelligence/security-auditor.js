"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.securityAuditor = void 0;
exports.securityAuditor = {
  overview: "Detect common Python security pitfalls and propose fixes.",
  risks: [
    "eval/exec on untrusted input",
    "pickle deserialization",
    "SQL injection via string formatting",
    "shell=True subprocess usage",
    "unsafe yaml.load usage",
  ],
  recommendations: [
    "Use parameterized SQL and ORM bindings",
    "Prefer json over pickle for untrusted data",
    "Use subprocess without shell and pass args list",
    "Use yaml.safe_load or SafeLoader",
  ],
};
