"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.phpEcosystem = void 0;
exports.phpEcosystem = {
    fileExtensions: [".php", ".phtml", ".phpt"],
    paradigms: ["oop", "functional", "procedural"],
    packageManagers: ["Composer"],
    buildTools: ["Composer scripts", "Phing", "Deployer"],
    testing: ["PHPUnit", "Pest", "Codeception"],
    integrationTesting: ["Behat"],
    linting: ["PHPStan", "Psalm"],
    formatting: ["PHP-CS-Fixer", "PHP_CodeSniffer"],
    typeChecking: ["PHPStan", "Psalm"],
    docs: ["phpDocumentor", "Doctum"],
    ciCd: ["GitHub Actions", "GitLab CI"],
    deploymentTargets: ["Apache", "Nginx", "PHP-FPM", "containers", "serverless"],
    runtimes: ["FPM", "CLI", "Apache module"],
    frameworks: ["Laravel", "Symfony", "WordPress", "Slim"],
    packageIndex: "Packagist",
    observability: ["Monolog", "OpenTelemetry"]
};
