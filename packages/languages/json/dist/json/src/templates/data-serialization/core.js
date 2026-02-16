"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataSerializationTemplate = dataSerializationTemplate;
function dataSerializationTemplate() {
    return [
        "{",
        "  \"items\": [{ \"id\": 1, \"name\": \"Item\" }]",
        "}"
    ].join("\n");
}
