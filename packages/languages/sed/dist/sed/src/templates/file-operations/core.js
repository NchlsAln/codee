"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileOperationsTemplate = fileOperationsTemplate;
function fileOperationsTemplate() {
    return [
        "sed -i.bak 's/OLD/NEW/g' config.ini",
        "sed -n '1,5p' README.md > snippet.txt",
        "sed 's/[[:space:]]*$//' input.txt > trimmed.txt"
    ].join("\n");
}
