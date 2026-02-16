"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.javaEcosystem = void 0;
exports.javaEcosystem = {
    buildTools: ["Maven", "Gradle", "Bazel"],
    packageManagers: ["Maven Central", "Gradle Plugin Portal"],
    frameworks: ["Spring", "Jakarta EE", "Micronaut", "Quarkus"],
    testing: ["JUnit", "Testcontainers", "Mockito"],
    e2eTesting: ["RestAssured", "Playwright"],
    linting: ["Checkstyle", "SpotBugs", "PMD"],
    formatting: ["Spotless", "google-java-format"],
    docs: ["Javadoc", "Asciidoctor"],
    ciCd: ["GitHub Actions", "Jenkins", "GitLab CI"],
    deploymentTargets: ["containers", "serverless", "desktop", "android"],
    observability: ["Micrometer", "OpenTelemetry"],
    buildPackaging: ["fat-jar", "jlink", "native-image"]
};
