export const dockerfileRuntime = {
  name: "Docker Engine",
  supportedVersions: ["24.x"],
  executionModel: {
    build: "Layered image builds",
    caching: "Layer caching with BuildKit",
    multiStage: "Named stages for optimized images",
  },
  artifacts: ["Dockerfile"],
  performance: {
    notes: ["Order layers for caching", "Use .dockerignore", "Pin base images"],
  },
  tooling: {
    build: ["BuildKit", "docker buildx"],
    scanning: ["docker scan", "trivy"],
    registry: ["Docker Hub", "GHCR"],
  },
};
