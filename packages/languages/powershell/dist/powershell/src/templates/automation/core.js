"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.automationTemplate = automationTemplate;
function automationTemplate() {
    return [
        "try {",
        "  foreach ($file in Get-ChildItem *.log) {",
        "    if ($file.Length -gt 0) { Compress-Archive $file.FullName \"$($file.Name).zip\" }",
        "  }",
        "} catch { Write-Error $_ }"
    ].join("\n");
}
