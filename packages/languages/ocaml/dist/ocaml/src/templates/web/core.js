"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.webTemplate = webTemplate;
function webTemplate() {
    return [
        "open Dream",
        "let () =",
        "  Dream.run",
        "  @@ Dream.logger",
        "  @@ Dream.router [",
        "       Dream.get \"/health\" (fun _ -> Dream.respond \"ok\");",
        "     ]"
    ].join("\n");
}
