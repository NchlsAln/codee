export function routingTemplate(): string {
  return "#include <httplib.h>\n\nint main() {\n  httplib::Server server;\n  server.Get(\"/items/(\\\\d+)\", [](const httplib::Request& req, httplib::Response& res) {\n    res.set_content(req.matches[1], \"text/plain\");\n  });\n  server.listen(\"0.0.0.0\", 8080);\n  return 0;\n}\n";
}
