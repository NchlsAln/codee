"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dockerfileEcosystem = void 0;
exports.dockerfileEcosystem = {
  fileExtensions: ["Dockerfile", ".dockerfile", "Dockerfile.*"],
  paradigms: ["declarative", "build-instructions"],
  registries: ["Docker Hub", "GHCR", "ECR"],
  tooling: ["BuildKit", "docker-compose"],
  bestPractices: ["multi-stage builds", "small base images"],
  deploymentTargets: ["containers", "kubernetes", "CI pipelines"],
};
