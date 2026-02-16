"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileOperationsTemplate = fileOperationsTemplate;
function fileOperationsTemplate() {
    return [
        "New-Item -ItemType Directory -Path backups -Force",
        "Copy-Item -Path .\\config.yml -Destination backups\\config.yml",
        "Move-Item -Path .\\data.txt -Destination .\\archive\\data.txt",
        "(Get-Acl .\\config.yml).Access"
    ].join("\n");
}
