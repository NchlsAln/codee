"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.goEcosystem = void 0;
exports.goEcosystem = {
    packageManager: "go mod",
    workflows: ["go mod init", "go get", "go mod tidy"],
    buildTools: ["go build", "go test", "goreleaser", "mage"],
    testing: ["go test ./...", "testify", "ginkgo"],
    linting: ["go vet ./...", "golangci-lint run", "staticcheck"],
    formatting: ["gofmt -w", "goimports -w"],
    docs: ["godoc", "pkgsite"],
    ciCd: ["GitHub Actions", "GitLab CI", "Buildkite"],
    deploymentTargets: ["containers", "server", "cli", "serverless", "embedded"],
    frameworks: ["gin", "echo", "fiber"]
};
