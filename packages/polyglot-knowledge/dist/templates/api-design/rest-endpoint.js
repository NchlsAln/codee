"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.restEndpointTemplate = restEndpointTemplate;
function restEndpointTemplate(language) {
    switch (language) {
        case "python":
            return "from fastapi import FastAPI\napp = FastAPI()\n\n@app.get(\"/health\")\nasync def health():\n    return {\"ok\": True}\n";
        case "typescript":
            return "import express from \"express\";\nconst app = express();\napp.get(\"/health\", (_req, res) => res.json({ ok: true }));\n";
        case "rust":
            return "// axum example\nasync fn health() -> &'static str { \"ok\" }\n";
        case "go":
            return "package main\n\nimport (\n  \"net/http\"\n)\n\nfunc health(w http.ResponseWriter, _ *http.Request) {\n  w.Header().Set(\"Content-Type\", \"application/json\")\n  w.Write([]byte(\"{\\\"ok\\\": true}\"))\n}\n";
        default:
            return "// TODO: Implement template";
    }
}
