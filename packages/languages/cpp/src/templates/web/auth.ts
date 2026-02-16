export function authTemplate(): string {
  return "#include <httplib.h>\n\nint main() {\n  httplib::Server server;\n  server.Get(\"/secure\", [](const httplib::Request& req, httplib::Response& res) {\n    if (req.get_header_value(\"authorization\") != \"Bearer secret\") {\n      res.status = 403;\n      return;\n    }\n    res.set_content(\"ok\", \"text/plain\");\n  });\n  server.listen(\"0.0.0.0\", 8080);\n  return 0;\n}\n";
}
