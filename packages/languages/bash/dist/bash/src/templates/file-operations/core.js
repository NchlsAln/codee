"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileOperationsTemplate = fileOperationsTemplate;
function fileOperationsTemplate() {
    return [
        "mkdir -p backups",
        "cp config.yml backups/config.yml",
        "mv data.txt archive/data.txt",
        "chmod 640 backups/config.yml"
    ].join("\n");
}
