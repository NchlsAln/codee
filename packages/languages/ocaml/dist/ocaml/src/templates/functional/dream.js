"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dreamTemplate = dreamTemplate;
function dreamTemplate() {
    return [
        "let () =",
        "  Dream.run",
        "    (Dream.router [ Dream.get \"/health\" (fun _ -> Dream.html \"ok\") ])"
    ].join("\n");
}
