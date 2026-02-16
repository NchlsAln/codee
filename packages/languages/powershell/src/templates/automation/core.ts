export function automationTemplate(): string {
  return [
    "try {",
    "  foreach ($file in Get-ChildItem *.log) {",
    "    if ($file.Length -gt 0) { Compress-Archive $file.FullName \"$($file.Name).zip\" }",
    "  }",
    "} catch { Write-Error $_ }"
  ].join("\n");
}
