"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chronosTemplate = chronosTemplate;
function chronosTemplate() {
    return [
        "import chronos",
        "proc main() {.async.} =",
        "  await sleepAsync(10.milliseconds)",
        "  echo \"ok\"",
        "waitFor main()"
    ].join("\n");
}
