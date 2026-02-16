"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.supervisionTemplate = supervisionTemplate;
function supervisionTemplate() {
    return [
        "(def worker (future (Thread/sleep 50) :ok))",
        "(println @worker)"
    ].join("\n");
}
