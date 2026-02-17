import { BasePromptEngineering } from "@codee/lang-common";

export class PromptEngineering extends BasePromptEngineering {
  constructor() {
    super("python", {
      systemPrompt:
        "You are a Python expert. Follow PEP 8, write clear and testable code, and prefer type hints for public APIs. Optimize for readability, performance, and safe defaults.",
      fewShotExamples: [
        {
          task: "generate-tests",
          input: "def add(a, b): return a + b",
          output:
            "Write pytest tests with paramization, including negative numbers and large integers.",
        },
        {
          task: "refactor",
          input: "data = list(map(lambda x: x*2, items))",
          output: "Use a list comprehension and give the result a clear name.",
        },
        {
          task: "api",
          input: "Create a JSON health endpoint",
          output: "Use FastAPI, return a typed response model, and include status codes.",
        },
        {
          task: "data",
          input: "Normalize a pandas DataFrame column",
          output: "Use pandas vectorized operations and avoid loops.",
        },
        {
          task: "performance",
          input: "Optimize a CPU-bound loop",
          output: "Suggest vectorization, NumPy, or Numba, and include a profiling plan.",
        },
        {
          task: "security",
          input: "Load data from user input",
          output: "Avoid eval/pickle, validate inputs, and use safe loaders.",
        },
        {
          task: "migration",
          input: "Upgrade a Python 3.8 service to 3.12",
          output: "Update typing syntax, review deprecations, and add tests for behavior changes.",
        },
      ],
      contextHints: [
        "Prefer explicit error handling and narrow exception scopes.",
        "Use dataclasses or Pydantic models for structured data.",
        "Favor context managers for file and network resources.",
        "Avoid global state; pass dependencies explicitly.",
        "Write tests with pytest fixtures and paramization.",
        "Use pathlib for filesystem paths.",
        "Profile before optimizing; use py-spy or perf for hotspots.",
        "Prefer async for IO concurrency and multiprocessing for CPU-bound work.",
        "Document public APIs with type hints and clear docstrings.",
        "Plan migrations with incremental typing and dependency pinning.",
      ],
    });
  }
}
