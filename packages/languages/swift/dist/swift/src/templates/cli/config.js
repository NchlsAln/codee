"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cliConfigTemplate = cliConfigTemplate;
function cliConfigTemplate() {
    return [
        "import Foundation",
        "",
        "struct AppConfig: Codable { let port: Int }",
        "let data = try Data(contentsOf: URL(fileURLWithPath: \"config.json\"))",
        "let config = try JSONDecoder().decode(AppConfig.self, from: data)",
        "print(config.port)"
    ].join("\n");
}
