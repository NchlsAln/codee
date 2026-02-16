/* eslint-disable @typescript-eslint/no-var-requires, no-console */
const { mkdirSync, writeFileSync } = require("fs");
const { join, dirname } = require("path");

const ROOT = process.cwd();

const renderTemplate = (fnName, lines) => {
  const body = lines.map((line) => `    ${JSON.stringify(line)}`).join(",\n");
  return [
    `export function ${fnName}(): string {`,
    "  return [",
    body,
    "  ].join(\"\\n\");",
    "}",
    ""
  ].join("\n");
};

const TEMPLATE_DATA = {
  bash: {
    "file-operations/core.ts": {
      fn: "fileOperationsTemplate",
      lines: [
        "mkdir -p backups",
        "cp config.yml backups/config.yml",
        "mv data.txt archive/data.txt",
        "chmod 640 backups/config.yml"
      ]
    },
    "text-processing/core.ts": {
      fn: "textProcessingTemplate",
      lines: [
        "grep -E \"ERROR|WARN\" app.log | sort | uniq -c",
        "cut -d, -f1,3 data.csv | head -n 5",
        "tr -s ' ' < input.txt"
      ]
    },
    "system-admin/core.ts": {
      fn: "systemAdminTemplate",
      lines: [
        "ps aux | grep -i nginx",
        "systemctl status sshd",
        "id -u \"$USER\"",
        "crontab -l"
      ]
    },
    "networking/core.ts": {
      fn: "networkingTemplate",
      lines: [
        "curl -fsSL https://example.com/health",
        "wget -qO- https://example.com/api",
        "ss -tulpn | head -n 5"
      ]
    },
    "automation/core.ts": {
      fn: "automationTemplate",
      lines: [
        "set -euo pipefail",
        "for file in *.log; do",
        "  [ -s \"$file\" ] && gzip -9 \"$file\"",
        "done"
      ]
    },
    "data-extraction/core.ts": {
      fn: "dataExtractionTemplate",
      lines: [
        "awk -F, 'NR>1 { print $1, $3 }' data.csv",
        "jq -r '.items[] | [.id,.name] | @tsv' data.json",
        "grep -E \"user=|status=\" app.log"
      ]
    },
    "reporting/core.ts": {
      fn: "reportingTemplate",
      lines: [
        "count=$(grep -c \"ERROR\" app.log)",
        "printf \"Errors: %s\\n\" \"$count\"",
        "printf \"Report generated at %s\\n\" \"$(date -Iseconds)\""
      ]
    },
    "security/core.ts": {
      fn: "securityTemplate",
      lines: [
        "chmod 700 ~/.ssh",
        "gpg --batch --yes -c secrets.txt",
        "export API_TOKEN=\"$(cat /run/secrets/api_token)\""
      ]
    }
  },
  powershell: {
    "file-operations/core.ts": {
      fn: "fileOperationsTemplate",
      lines: [
        "New-Item -ItemType Directory -Path backups -Force",
        "Copy-Item -Path .\\config.yml -Destination backups\\config.yml",
        "Move-Item -Path .\\data.txt -Destination .\\archive\\data.txt",
        "(Get-Acl .\\config.yml).Access"
      ]
    },
    "text-processing/core.ts": {
      fn: "textProcessingTemplate",
      lines: [
        "Get-Content app.log | Select-String -Pattern 'ERROR|WARN'",
        "Get-Content data.csv | Select-Object -First 5",
        "\"a  b   c\" -replace '\\s+', ' '"
      ]
    },
    "system-admin/core.ts": {
      fn: "systemAdminTemplate",
      lines: [
        "Get-Process | Sort-Object CPU -Descending | Select-Object -First 5",
        "Get-Service | Where-Object Status -eq 'Running'",
        "Get-ScheduledTask | Select-Object -First 3"
      ]
    },
    "networking/core.ts": {
      fn: "networkingTemplate",
      lines: [
        "Invoke-RestMethod https://example.com/api/health",
        "Invoke-WebRequest https://example.com",
        "Test-NetConnection -ComputerName example.com -Port 443"
      ]
    },
    "automation/core.ts": {
      fn: "automationTemplate",
      lines: [
        "try {",
        "  foreach ($file in Get-ChildItem *.log) {",
        "    if ($file.Length -gt 0) { Compress-Archive $file.FullName \"$($file.Name).zip\" }",
        "  }",
        "} catch { Write-Error $_ }"
      ]
    },
    "data-extraction/core.ts": {
      fn: "dataExtractionTemplate",
      lines: [
        "$rows = Import-Csv .\\data.csv",
        "$rows | Where-Object { $_.Status -eq 'ERROR' }",
        "$json = Get-Content .\\data.json | ConvertFrom-Json"
      ]
    },
    "reporting/core.ts": {
      fn: "reportingTemplate",
      lines: [
        "$summary = Get-Process | Group-Object ProcessName | Sort-Object Count -Descending",
        "$summary | Select-Object -First 5 | ConvertTo-Json | Out-File report.json",
        "$summary | Select-Object -First 5 | ConvertTo-Html | Out-File report.html"
      ]
    },
    "security/core.ts": {
      fn: "securityTemplate",
      lines: [
        "$cred = Get-Credential",
        "$secret = ConvertTo-SecureString 'P@ssw0rd' -AsPlainText -Force",
        "Protect-CmsMessage -To 'ops@example.com' -Content 'Rotate keys'"
      ]
    }
  },
  awk: {
    "file-operations/core.ts": {
      fn: "fileOperationsTemplate",
      lines: [
        "awk 'BEGIN { print \"header\" } { print }' input.txt > output.txt",
        "awk '{ print $0 }' input.txt > copy.txt",
        "awk 'END { print NR \" lines\" }' input.txt"
      ]
    },
    "text-processing/core.ts": {
      fn: "textProcessingTemplate",
      lines: [
        "awk '/ERROR|WARN/ { print $0 }' app.log",
        "awk '{ gsub(/[[:space:]]+/, \" \"); print }' input.txt"
      ]
    },
    "system-admin/core.ts": {
      fn: "systemAdminTemplate",
      lines: [
        "awk -F: '{ print $1, $3 }' /etc/passwd",
        "awk '{ total += $2 } END { print total }' disk.txt"
      ]
    },
    "networking/core.ts": {
      fn: "networkingTemplate",
      lines: [
        "awk 'BEGIN { \"curl -s https://example.com/health\" | getline line; print line }'",
        "awk 'BEGIN { \"ping -c 1 example.com\" | getline line; print line }'"
      ]
    },
    "automation/core.ts": {
      fn: "automationTemplate",
      lines: [
        "awk '$3 > 100 { print $1 }' data.csv",
        "awk 'NR==1 { next } { sum += $2 } END { print sum }' data.csv"
      ]
    },
    "data-extraction/core.ts": {
      fn: "dataExtractionTemplate",
      lines: [
        "awk -F, 'NR>1 { print $1, $3 }' data.csv",
        "awk -F\"[=: ]+\" '/status/ { print $2 }' app.log"
      ]
    },
    "reporting/core.ts": {
      fn: "reportingTemplate",
      lines: [
        "awk '{ counts[$1]++ } END { for (k in counts) print k, counts[k] }' input.txt",
        "awk 'END { printf \"Rows: %d\\n\", NR }' data.csv"
      ]
    },
    "security/core.ts": {
      fn: "securityTemplate",
      lines: [
        "awk -F: '$3 == 0 { print $1 }' /etc/passwd",
        "awk '/FAILED/ { print $1, $2, $3 }' auth.log"
      ]
    }
  },
  sed: {
    "file-operations/core.ts": {
      fn: "fileOperationsTemplate",
      lines: [
        "sed -i.bak 's/OLD/NEW/g' config.ini",
        "sed -n '1,5p' README.md > snippet.txt",
        "sed 's/[[:space:]]*$//' input.txt > trimmed.txt"
      ]
    },
    "text-processing/core.ts": {
      fn: "textProcessingTemplate",
      lines: [
        "sed 's/[[:space:]]\\+/ /g' input.txt",
        "sed '/^#/d' config.ini"
      ]
    },
    "system-admin/core.ts": {
      fn: "systemAdminTemplate",
      lines: [
        "sed -n '1,10p' /etc/hosts",
        "sed '/^#/d' /etc/fstab"
      ]
    },
    "networking/core.ts": {
      fn: "networkingTemplate",
      lines: [
        "curl -s https://example.com | sed -n '1,5p'",
        "ss -tulpn | sed -n '1,3p'"
      ]
    },
    "automation/core.ts": {
      fn: "automationTemplate",
      lines: [
        "sed -n '10,20p' input.txt",
        "sed -n '/ERROR/p' app.log"
      ]
    },
    "data-extraction/core.ts": {
      fn: "dataExtractionTemplate",
      lines: [
        "sed -n 's/^user=\\([^ ]*\\).*/\\1/p' app.log",
        "sed -n 's/.*,\\([^,]*\\)$/\\1/p' data.csv"
      ]
    },
    "reporting/core.ts": {
      fn: "reportingTemplate",
      lines: [
        "sed -n '=' app.log | tail -n 1",
        "sed -n '1,5p' report.txt"
      ]
    },
    "security/core.ts": {
      fn: "securityTemplate",
      lines: [
        "sed -n 's/\\(password=\\).*/\\1REDACTED/p' config.ini",
        "sed -n 's/\\(token=\\).*/\\1REDACTED/p' app.log"
      ]
    }
  }
};

Object.entries(TEMPLATE_DATA).forEach(([lang, templates]) => {
  Object.entries(templates).forEach(([relPath, spec]) => {
    const outPath = join(ROOT, "packages", "languages", lang, "src", "templates", relPath);
    mkdirSync(dirname(outPath), { recursive: true });
    const content = renderTemplate(spec.fn, spec.lines);
    writeFileSync(outPath, content);
  });
});

console.log("Generated Batch 8 templates.");
