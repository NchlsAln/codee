"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpRestTemplate = httpRestTemplate;
function httpRestTemplate() {
    return "#include <cpr/cpr.h>\n\nint main() {\n  auto response = cpr::Post(cpr::Url{\"https://example.com/items\"}, cpr::Body{\"{\\\"name\\\":\\\"widget\\\"}\"}, cpr::Header{{\"content-type\", \"application/json\"}});\n  (void)response;\n  return 0;\n}\n";
}
