export declare const terraformRuntime: {
  name: string;
  supportedVersions: string[];
  executionModel: {
    workflow: string;
    state: string;
    providers: string;
  };
  concurrencyModel: {
    parallelism: string;
    locking: string;
  };
  artifacts: string[];
  performance: {
    notes: string[];
  };
};
