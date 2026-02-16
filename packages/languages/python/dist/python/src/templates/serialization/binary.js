"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.binaryTemplate = binaryTemplate;
function binaryTemplate() {
    return [
        "import pickle",
        "",
        "payload = {\"id\": 1, \"name\": \"Ada\"}",
        "blob = pickle.dumps(payload)",
        "restored = pickle.loads(blob)",
        "print(restored)"
    ].join("\n");
}
