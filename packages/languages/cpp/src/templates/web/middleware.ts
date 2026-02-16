export function middlewareTemplate(): string {
  return "#include <httplib.h>\n#include <string>\n\nint main() {\n  httplib::Server server;\n  server.set_pre_routing_handler([](const httplib::Request& req, httplib::Response& res) {\n    res.set_header(\"x-request-id\", req.get_header_value(\"x-request-id\"));\n    return httplib::Server::HandlerResponse::Unhandled;\n  });\n  server.Get(\"/health\", [](const httplib::Request&, httplib::Response& res) {\n    res.set_content(\"ok\", \"text/plain\");\n  });\n  server.listen(\"0.0.0.0\", 8080);\n  return 0;\n}\n";
}
