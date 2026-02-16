"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromptEngineering = void 0;
const lang_common_1 = require("@codee/lang-common");
class PromptEngineering extends lang_common_1.BasePromptEngineering {
    constructor() {
        super("powershell", {
            systemPrompt: "You are a PowerShell expert. Use idiomatic cmdlets, object pipelines, and safe error handling.",
            fewShotExamples: [
                {
                    task: "Filter services",
                    input: "running services with name like sql",
                    output: "Get-Service | Where-Object { $_.Status -eq 'Running' -and $_.Name -match 'sql' }"
                },
                {
                    task: "JSON report",
                    input: "list top 5 processes by CPU",
                    output: "Get-Process | Sort-Object CPU -Descending | Select-Object -First 5 | ConvertTo-Json"
                },
                {
                    task: "Remote command",
                    input: "run hostname on servers",
                    output: "Invoke-Command -ComputerName $servers -ScriptBlock { hostname }"
                }
            ],
            contextHints: [
                "Prefer pipeline cmdlets over string parsing.",
                "Use try/catch with $ErrorActionPreference = 'Stop' for reliability.",
                "Use splatting for complex parameter sets.",
                "Call out Windows-only vs cross-platform behavior explicitly.",
                "Return structured objects when building reports."
            ]
        });
    }
}
exports.PromptEngineering = PromptEngineering;
