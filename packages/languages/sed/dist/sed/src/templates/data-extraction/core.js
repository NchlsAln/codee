"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataExtractionTemplate = dataExtractionTemplate;
function dataExtractionTemplate() {
    return [
        "sed -n 's/^user=\\([^ ]*\\).*/\\1/p' app.log",
        "sed -n 's/.*,\\([^,]*\\)$/\\1/p' data.csv"
    ].join("\n");
}
