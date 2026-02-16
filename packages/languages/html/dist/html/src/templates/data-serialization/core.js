"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataSerializationTemplate = dataSerializationTemplate;
function dataSerializationTemplate() {
    return [
        "<script type=\"application/json\" id=\"data\">",
        "  { \"items\": [\"a\", \"b\"] }",
        "</script>"
    ].join("\n");
}
