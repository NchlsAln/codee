export function httpServerTemplate(): string {
  return "#include <httplib.h>\n\nint main() {\n  httplib::Server server;\n  server.Get(\"/health\", [](const httplib::Request&, httplib::Response& res) {\n    res.set_content(\"ok\", \"text/plain\");\n  });\n  server.listen(\"0.0.0.0\", 8080);\n  return 0;\n}\n";
}
