"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.websocketsTemplate = websocketsTemplate;
function websocketsTemplate() {
    return "#include <uwebsockets/App.h>\n\nint main() {\n  uWS::App().ws<\"/ws\">({})\n    .message([](auto* ws, std::string_view message, uWS::OpCode) {\n      ws->send(message, uWS::OpCode::TEXT);\n    })\n    .listen(8080, [](auto*) {})\n    .run();\n  return 0;\n}\n";
}
