# Performance Tuning

Codee targets fast cold starts, quick first tokens, and responsive UI even on consumer hardware.

## Goals
- Cold start: < 3 seconds (activation to engine ready)
- First token: < 2 seconds (local model)
- Indexing: < 1 minute for 10k files
- Memory: < 2GB RAM for typical projects
- UI: 60fps during streaming

## Recommended Settings
- Defer indexing until idle (`codee.advanced.indexingIdleDelayMs`).
- Limit embedding cache size (`codee.advanced.embeddingCacheMaxEntries`).
- Enable performance metrics for profiling sessions (`codee.advanced.performanceMetricsEnabled`).
- Keep language server idle timeout low for memory pressure (`codee.advanced.languageServerIdleMs`).

## Operational Tips
- Prefer smaller local models (4-bit quantized) for faster responses.
- Keep projects trimmed with ignore patterns in `codee.advanced.excludePatterns`.
- Use shorter context windows when latency spikes.
- If memory grows, restart Codee to compact cached embeddings.

## Benchmarks
Run local benchmarks to track regressions:

```bash
npm run benchmark
```

Add the benchmark command to CI to catch startup or indexing regressions early.
