"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jwtTemplate = jwtTemplate;
function jwtTemplate() {
    return "#include <jwt-cpp/jwt.h>\n#include <iostream>\n\nint main() {\n  auto token = jwt::create().set_subject(\"user-1\").sign(jwt::algorithm::hs256{\"secret\"});\n  std::cout << token << \"\\n\";\n  return 0;\n}\n";
}
