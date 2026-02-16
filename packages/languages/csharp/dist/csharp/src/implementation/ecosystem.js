"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.csharpEcosystem = void 0;
exports.csharpEcosystem = {
    fileExtensions: [
        ".cs",
        ".csx"
    ],
    paradigms: [
        "oop",
        "functional",
        "procedural"
    ],
    packageManagers: ["NuGet"],
    buildTools: ["dotnet", "msbuild"],
    testing: ["xUnit", "NUnit", "MSTest"],
    linting: ["Roslyn analyzers", "StyleCop"],
    formatting: ["dotnet format", "csharpier"],
    docs: ["DocFX", "XML docs"],
    ciCd: ["GitHub Actions", "Azure Pipelines", "GitLab CI"],
    deploymentTargets: ["server", "desktop", "mobile", "web", "cloud"],
    tooling: ["dotnet", "msbuild", "nuget", "editorconfig"],
    runtimes: ["clr", "aot"],
    frameworks: ["ASP.NET Core", "Blazor", "MAUI", "Orleans"]
};
