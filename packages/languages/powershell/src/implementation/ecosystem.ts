export const powershellEcosystem = {
  fileExtensions: [".ps1", ".psm1", ".psd1"],
  paradigms: ["object-pipeline", "procedural"],
  packageManagers: ["PowerShell Gallery", "NuGet"],
  buildTools: ["dotnet", "msbuild"],
  testing: ["Pester"],
  linting: ["PSScriptAnalyzer"],
  formatting: ["PSScriptAnalyzer -Fix"],
  docs: ["Get-Help", "PlatyPS"],
  ciCd: ["GitHub Actions", "Azure DevOps"],
  deploymentTargets: ["Windows", "Linux", "macOS", "Azure Automation"],
  observability: ["Write-Verbose", "Write-Information", "Start-Transcript"]
};
