"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.boostTemplate = boostTemplate;
function boostTemplate() {
    return "#include <boost/asio.hpp>\n\nint main() {\n  boost::asio::io_context io;\n  return 0;\n}\n";
}
