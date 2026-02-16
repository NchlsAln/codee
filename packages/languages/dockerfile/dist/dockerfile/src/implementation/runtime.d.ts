export declare const dockerfileRuntime: {
  name: string;
  supportedVersions: string[];
  executionModel: {
    build: string;
    caching: string;
    multiStage: string;
  };
  artifacts: string[];
  performance: {
    notes: string[];
  };
  tooling: {
    build: string[];
    scanning: string[];
    registry: string[];
  };
};
