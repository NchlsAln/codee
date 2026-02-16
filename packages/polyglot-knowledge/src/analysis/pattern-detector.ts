import { LanguageId, PatternMatch } from "../types";

type MatchBuilder = (match: RegExpExecArray, code: string) => PatternMatch | null;

export function detectPatterns(code: string, language: LanguageId): PatternMatch[] {
  const cacheKey = buildCacheKey(language, code);
  const cached = patternCache.get(cacheKey);
  if (cached) {
    refreshCacheEntry(cacheKey, cached);
    return cached;
  }
  switch (language) {
    case "python":
      return cachePatterns(cacheKey, detectPythonPatterns(code));
    case "typescript":
    case "javascript":
      return cachePatterns(cacheKey, detectTypeScriptPatterns(code, language));
    case "rust":
      return cachePatterns(cacheKey, detectRustPatterns(code));
    case "go":
      return cachePatterns(cacheKey, detectGoPatterns(code));
    case "java":
      return cachePatterns(cacheKey, detectJavaPatterns(code));
    case "cpp":
      return cachePatterns(cacheKey, detectCppPatterns(code));
    default:
      return [];
  }
}

const patternCache = new Map<string, PatternMatch[]>();
const MAX_CACHE_ENTRIES = 200;

function buildCacheKey(language: LanguageId, code: string): string {
  return `${language}:${hashCode(code)}`;
}

function cachePatterns(key: string, patterns: PatternMatch[]): PatternMatch[] {
  patternCache.set(key, patterns);
  enforceCacheLimit();
  return patterns;
}

function refreshCacheEntry(key: string, patterns: PatternMatch[]): void {
  patternCache.delete(key);
  patternCache.set(key, patterns);
}

function enforceCacheLimit(): void {
  while (patternCache.size > MAX_CACHE_ENTRIES) {
    const oldestKey = patternCache.keys().next().value as string | undefined;
    if (!oldestKey) {
      return;
    }
    patternCache.delete(oldestKey);
  }
}

function hashCode(input: string): string {
  let hash = 5381;
  for (let i = 0; i < input.length; i += 1) {
    hash = (hash * 33) ^ input.charCodeAt(i);
  }
  return (hash >>> 0).toString(16);
}

function detectPythonPatterns(code: string): PatternMatch[] {
  const matches: PatternMatch[] = [];
  const listComp = matchOnce(
    /\[(?<transform>[^\]\n]+?)\s+for\s+(?<item>\w+)\s+in\s+(?<source>[^\]\n]+?)(?:\s+if\s+(?<filter>[^\]\n]+))?\]/,
    code,
    (match) => {
      const groups = match.groups ?? {};
      const confidence = scoreConfidence(0.7, Boolean(groups.filter), Boolean(groups.transform));
      return {
        id: "list-comprehension",
        language: "python",
        confidence,
        parameters: {
          transform: (groups.transform ?? "").trim(),
          item: (groups.item ?? "item").trim(),
          source: (groups.source ?? "items").trim(),
          filter: (groups.filter ?? "").trim()
        },
        notes: ["Detected Python list comprehension."]
      };
    }
  );
  if (listComp) {
    matches.push(listComp);
  }

  const generics = matchOnce(/TypeVar\(|Generic\[|list\[[^\]]+\]|dict\[[^\]]+\]/, code, () => {
    return {
      id: "generics",
      language: "python",
      confidence: scoreConfidence(0.6, true, /TypeVar\(|Generic\[/.test(code)),
      parameters: {
        hint: "typing"
      },
      notes: ["Detected Python generic type hints."]
    };
  });
  if (generics) {
    matches.push(generics);
  }

  const iterators = matchOnce(/\byield\b|\biter\(|\bnext\(/, code, (match) => {
    const token = match[0] ?? "yield";
    return {
      id: "iterators",
      language: "python",
      confidence: scoreConfidence(0.6, token.includes("yield"), true),
      parameters: {
        keyword: token.trim()
      },
      notes: ["Detected Python iterator or generator usage."]
    };
  });
  if (iterators) {
    matches.push(iterators);
  }

  const closures = matchOnce(/\blambda\s+\w+\s*:/, code, () => {
    return {
      id: "closures",
      language: "python",
      confidence: scoreConfidence(0.6, true, /\blambda\b/.test(code)),
      parameters: {
        form: "lambda"
      },
      notes: ["Detected Python lambda closure."]
    };
  });
  if (closures) {
    matches.push(closures);
  }

  const patternMatching = matchOnce(/\bmatch\s+[^:]+:\s*\n\s*case\s+/m, code, () => {
    return {
      id: "pattern-matching",
      language: "python",
      confidence: scoreConfidence(0.65, true, true),
      parameters: {
        keyword: "match"
      },
      notes: ["Detected Python match/case pattern matching."]
    };
  });
  if (patternMatching) {
    matches.push(patternMatching);
  }

  const concurrency = matchOnce(/async\s+for|async\s+with|asyncio\.(gather|wait|as_completed)/, code, () => {
    return {
      id: "concurrency-patterns",
      language: "python",
      confidence: scoreConfidence(0.6, true, true),
      parameters: {
        form: "asyncio"
      },
      notes: ["Detected Python concurrency pattern."]
    };
  });
  if (concurrency) {
    matches.push(concurrency);
  }

  const decorator = matchOnce(
    /^@(?<decorator>[\w.]+(?:\([^)]*\))?)\s*\n\s*(?<async>async\s+)?(?<target>def|class)\s+(?<name>\w+)/m,
    code,
    (match) => {
      const groups = match.groups ?? {};
      return {
        id: "decorator",
        language: "python",
        confidence: scoreConfidence(0.7, Boolean(groups.target), Boolean(groups.decorator)),
        parameters: {
          decorator: (groups.decorator ?? "").trim(),
          target: (groups.target ?? "def").trim(),
          name: (groups.name ?? "").trim(),
          async: groups.async ? "true" : "false"
        },
        notes: ["Detected Python decorator."]
      };
    }
  );
  if (decorator) {
    matches.push(decorator);
  }

  const asyncAwait = matchOnce(/\basync\s+def\s+(?<name>\w+)/, code, (match) => {
    const groups = match.groups ?? {};
    const hasAwait = /\bawait\s+/.test(code);
    return {
      id: "async-await",
      language: "python",
      confidence: scoreConfidence(0.7, hasAwait, Boolean(groups.name)),
      parameters: {
        name: (groups.name ?? "").trim(),
        hasAwait: hasAwait ? "true" : "false"
      },
      notes: ["Detected Python async/await."]
    };
  });
  if (asyncAwait) {
    matches.push(asyncAwait);
  }

  const dataclass = matchOnce(
    /@dataclass\s*\n\s*class\s+(?<name>\w+)\s*:\s*\n(?<body>(?:\s+.+\n?)*)/m,
    code,
    (match) => {
      const groups = match.groups ?? {};
      return {
        id: "dataclass",
        language: "python",
        confidence: scoreConfidence(0.75, Boolean(groups.name), Boolean(groups.body)),
        parameters: {
          name: (groups.name ?? "").trim(),
          body: (groups.body ?? "").trim()
        },
        notes: ["Detected Python dataclass."]
      };
    }
  );
  if (dataclass) {
    matches.push(dataclass);
  }

  const errorHandling = matchOnce(
    /try:\s*\n(?<tryBlock>[\s\S]+?)\n\s*except\s+(?<error>[^:\n]+)(?:\s+as\s+(?<var>\w+))?:/m,
    code,
    (match) => {
      const groups = match.groups ?? {};
      return {
        id: "error-handling",
        language: "python",
        confidence: scoreConfidence(0.75, Boolean(groups.tryBlock), Boolean(groups.error)),
        parameters: {
          errorType: (groups.error ?? "Exception").trim(),
          errorVar: (groups.var ?? "err").trim(),
          tryBlock: (groups.tryBlock ?? "").trim()
        },
        notes: ["Detected Python try/except."]
      };
    }
  );
  if (errorHandling) {
    matches.push(errorHandling);
  }

  const dictLiteral = matchOnce(/(?<name>\w+)?\s*=\s*\{(?<body>[^}]+)\}/, code, (match) => {
    const groups = match.groups ?? {};
    return {
      id: "dict-literal",
      language: "python",
      confidence: scoreConfidence(0.6, Boolean(groups.body), Boolean(groups.name)),
      parameters: {
        name: (groups.name ?? "data").trim(),
        body: (groups.body ?? "").trim()
      },
      notes: ["Detected Python dict literal."]
    };
  });
  if (dictLiteral) {
    matches.push(dictLiteral);
  }

  const noneHandling = matchOnce(/if\s+(?<name>\w+)\s+is\s+(?<negation>not\s+)?None/, code, (match) => {
    const groups = match.groups ?? {};
    return {
      id: "none-handling",
      language: "python",
      confidence: scoreConfidence(0.6, Boolean(groups.name), true),
      parameters: {
        name: (groups.name ?? "value").trim(),
        negation: groups.negation ? "true" : "false"
      },
      notes: ["Detected Python None check."]
    };
  });
  if (noneHandling) {
    matches.push(noneHandling);
  }

  return matches;
}

function detectTypeScriptPatterns(code: string, language: LanguageId): PatternMatch[] {
  const matches: PatternMatch[] = [];

  const listComp = detectTypeScriptListChain(code, language);
  if (listComp) {
    matches.push(listComp);
  }

  const generics = matchOnce(/\b(function|interface|type)\s+\w+\s*<[^>]+>|<\w+\s+extends\s+[^>]+>/, code, () => {
    return {
      id: "generics",
      language,
      confidence: scoreConfidence(0.6, true, /extends/.test(code)),
      parameters: {
        hint: "generic"
      },
      notes: ["Detected TypeScript generics."]
    };
  });
  if (generics) {
    matches.push(generics);
  }

  const iterators = matchOnce(/Symbol\.iterator|function\*|for\s*\(\s*const\s+\w+\s+of\s+/, code, (match) => {
    return {
      id: "iterators",
      language,
      confidence: scoreConfidence(0.6, match[0]?.includes("function*") ?? false, true),
      parameters: {
        form: "iterator"
      },
      notes: ["Detected TypeScript iterator or generator usage."]
    };
  });
  if (iterators) {
    matches.push(iterators);
  }

  const closures = matchOnce(/=>/, code, () => {
    return {
      id: "closures",
      language,
      confidence: scoreConfidence(0.55, true, true),
      parameters: {
        form: "arrow"
      },
      notes: ["Detected TypeScript arrow function."]
    };
  });
  if (closures) {
    matches.push(closures);
  }

  const patternMatching = matchOnce(/switch\s*\([^)]*\)\s*\{[\s\S]*case\s+/m, code, () => {
    return {
      id: "pattern-matching",
      language,
      confidence: scoreConfidence(0.6, true, /case/.test(code)),
      parameters: {
        form: "switch"
      },
      notes: ["Detected TypeScript switch-based matching."]
    };
  });
  if (patternMatching) {
    matches.push(patternMatching);
  }

  const concurrency = matchOnce(/Promise\.(all|race)|for\s+await\s*\(/, code, () => {
    return {
      id: "concurrency-patterns",
      language,
      confidence: scoreConfidence(0.6, true, true),
      parameters: {
        form: "promises"
      },
      notes: ["Detected TypeScript concurrency pattern."]
    };
  });
  if (concurrency) {
    matches.push(concurrency);
  }

  const decorator = matchOnce(
    /^@(?<decorator>[\w.]+(?:\([^)]*\))?)\s*\n\s*(?<export>export\s+)?(?<target>class|function)\s+(?<name>\w+)/m,
    code,
    (match) => {
      const groups = match.groups ?? {};
      return {
        id: "decorator",
        language,
        confidence: scoreConfidence(0.7, Boolean(groups.target), Boolean(groups.decorator)),
        parameters: {
          decorator: (groups.decorator ?? "").trim(),
          target: (groups.target ?? "class").trim(),
          name: (groups.name ?? "").trim(),
          exported: groups.export ? "true" : "false"
        },
        notes: ["Detected TypeScript decorator."]
      };
    }
  );
  if (decorator) {
    matches.push(decorator);
  }

  const asyncAwait = matchOnce(/\basync\s+function\s+(?<name>\w+)/, code, (match) => {
    const groups = match.groups ?? {};
    const hasAwait = /\bawait\s+/.test(code);
    return {
      id: "async-await",
      language,
      confidence: scoreConfidence(0.7, hasAwait, Boolean(groups.name)),
      parameters: {
        name: (groups.name ?? "").trim(),
        hasAwait: hasAwait ? "true" : "false"
      },
      notes: ["Detected TypeScript async/await."]
    };
  });
  if (asyncAwait) {
    matches.push(asyncAwait);
  }

  const dataclass = matchOnce(
    /(interface|class)\s+(?<name>\w+)\s*\{(?<body>[\s\S]*?)\}/m,
    code,
    (match) => {
      const groups = match.groups ?? {};
      return {
        id: "dataclass",
        language,
        confidence: scoreConfidence(0.65, Boolean(groups.name), Boolean(groups.body)),
        parameters: {
          name: (groups.name ?? "").trim(),
          body: (groups.body ?? "").trim()
        },
        notes: ["Detected TypeScript data type."]
      };
    }
  );
  if (dataclass) {
    matches.push(dataclass);
  }

  const errorHandling = matchOnce(/try\s*\{(?<tryBlock>[\s\S]+?)\}\s*catch\s*\((?<var>\w+)\)/m, code, (match) => {
    const groups = match.groups ?? {};
    return {
      id: "error-handling",
      language,
      confidence: scoreConfidence(0.7, Boolean(groups.tryBlock), Boolean(groups.var)),
      parameters: {
        errorVar: (groups.var ?? "err").trim(),
        tryBlock: (groups.tryBlock ?? "").trim()
      },
      notes: ["Detected TypeScript try/catch."]
    };
  });
  if (errorHandling) {
    matches.push(errorHandling);
  }

  return matches;
}

function detectRustPatterns(code: string): PatternMatch[] {
  const matches: PatternMatch[] = [];

  const listComp = detectRustIteratorChain(code);
  if (listComp) {
    matches.push(listComp);
  }

  const generics = matchOnce(/\b(fn|struct|impl)\s+\w+\s*<[^>]+>/, code, () => {
    return {
      id: "generics",
      language: "rust",
      confidence: scoreConfidence(0.65, true, /impl/.test(code)),
      parameters: {
        hint: "generic"
      },
      notes: ["Detected Rust generics."]
    };
  });
  if (generics) {
    matches.push(generics);
  }

  const iterators = matchOnce(/\bIterator\b|IntoIterator|\.iter\(\)|into_iter\(\)/, code, () => {
    return {
      id: "iterators",
      language: "rust",
      confidence: scoreConfidence(0.6, true, /\.iter\(\)/.test(code)),
      parameters: {
        form: "iterator"
      },
      notes: ["Detected Rust iterator usage."]
    };
  });
  if (iterators) {
    matches.push(iterators);
  }

  const closures = matchOnce(/\|[^|]*\|\s*[^\n;]+/, code, () => {
    return {
      id: "closures",
      language: "rust",
      confidence: scoreConfidence(0.6, true, true),
      parameters: {
        form: "closure"
      },
      notes: ["Detected Rust closure."]
    };
  });
  if (closures) {
    matches.push(closures);
  }

  const patternMatching = matchOnce(/\bmatch\s+[^\s]+\s*\{/, code, () => {
    return {
      id: "pattern-matching",
      language: "rust",
      confidence: scoreConfidence(0.7, true, true),
      parameters: {
        keyword: "match"
      },
      notes: ["Detected Rust match expression."]
    };
  });
  if (patternMatching) {
    matches.push(patternMatching);
  }

  const concurrency = matchOnce(/tokio::spawn|join!\(|select!\(|channel\(/, code, () => {
    return {
      id: "concurrency-patterns",
      language: "rust",
      confidence: scoreConfidence(0.6, true, true),
      parameters: {
        form: "tokio"
      },
      notes: ["Detected Rust concurrency pattern."]
    };
  });
  if (concurrency) {
    matches.push(concurrency);
  }

  const decorator = matchOnce(/#\[(?<decorator>[^\]]+)\]\s*\n\s*(?<target>fn|struct)\s+(?<name>\w+)/m, code, (match) => {
    const groups = match.groups ?? {};
    return {
      id: "decorator",
      language: "rust",
      confidence: scoreConfidence(0.7, Boolean(groups.decorator), Boolean(groups.name)),
      parameters: {
        decorator: (groups.decorator ?? "").trim(),
        target: (groups.target ?? "fn").trim(),
        name: (groups.name ?? "").trim()
      },
      notes: ["Detected Rust attribute macro."]
    };
  });
  if (decorator) {
    matches.push(decorator);
  }

  const asyncAwait = matchOnce(/\basync\s+fn\s+(?<name>\w+)/, code, (match) => {
    const groups = match.groups ?? {};
    const hasAwait = /\.await/.test(code);
    return {
      id: "async-await",
      language: "rust",
      confidence: scoreConfidence(0.7, hasAwait, Boolean(groups.name)),
      parameters: {
        name: (groups.name ?? "").trim(),
        hasAwait: hasAwait ? "true" : "false"
      },
      notes: ["Detected Rust async/await."]
    };
  });
  if (asyncAwait) {
    matches.push(asyncAwait);
  }

  const dataclass = matchOnce(/struct\s+(?<name>\w+)\s*\{(?<body>[\s\S]*?)\}/m, code, (match) => {
    const groups = match.groups ?? {};
    return {
      id: "dataclass",
      language: "rust",
      confidence: scoreConfidence(0.7, Boolean(groups.name), Boolean(groups.body)),
      parameters: {
        name: (groups.name ?? "").trim(),
        body: (groups.body ?? "").trim()
      },
      notes: ["Detected Rust struct."]
    };
  });
  if (dataclass) {
    matches.push(dataclass);
  }

  const errorHandling = matchOnce(/Result\s*<[^>]+>/, code, () => {
    return {
      id: "error-handling",
      language: "rust",
      confidence: scoreConfidence(0.9, true, /\?/.test(code)),
      parameters: {
        usesQuestionMark: /\?/.test(code) ? "true" : "false"
      },
      notes: ["Detected Rust Result-based error handling."]
    };
  });
  if (errorHandling) {
    matches.push(errorHandling);
  }

  return matches;
}

function detectGoPatterns(code: string): PatternMatch[] {
  const matches: PatternMatch[] = [];

  const generics = matchOnce(/\b(func|type)\s+\w+\s*\[[^\]]+\]/, code, () => {
    return {
      id: "generics",
      language: "go",
      confidence: scoreConfidence(0.6, true, /any|interface\{\}/.test(code)),
      parameters: {
        hint: "generic"
      },
      notes: ["Detected Go generics."]
    };
  });
  if (generics) {
    matches.push(generics);
  }

  const iterators = matchOnce(/for\s+[^\n]*range\s+/, code, () => {
    return {
      id: "iterators",
      language: "go",
      confidence: scoreConfidence(0.55, true, true),
      parameters: {
        form: "range"
      },
      notes: ["Detected Go range iteration."]
    };
  });
  if (iterators) {
    matches.push(iterators);
  }

  const closures = matchOnce(/:=\s*func\s*\(|=\s*func\s*\(/, code, () => {
    return {
      id: "closures",
      language: "go",
      confidence: scoreConfidence(0.6, true, true),
      parameters: {
        form: "func literal"
      },
      notes: ["Detected Go function literal."]
    };
  });
  if (closures) {
    matches.push(closures);
  }

  const patternMatching = matchOnce(/switch\s+\w+\s*:=\s*[^\n]+\.\(type\)/, code, () => {
    return {
      id: "pattern-matching",
      language: "go",
      confidence: scoreConfidence(0.6, true, true),
      parameters: {
        form: "type switch"
      },
      notes: ["Detected Go type switch."]
    };
  });
  if (patternMatching) {
    matches.push(patternMatching);
  }

  const concurrency = matchOnce(/sync\.WaitGroup|select\s*\{|\bgo\s+/, code, () => {
    return {
      id: "concurrency-patterns",
      language: "go",
      confidence: scoreConfidence(0.6, true, true),
      parameters: {
        form: "goroutine"
      },
      notes: ["Detected Go concurrency pattern."]
    };
  });
  if (concurrency) {
    matches.push(concurrency);
  }

  const goroutineCall = matchOnce(/\bgo\s+(?!func\b)(?<name>\w+)\s*\(/, code, (match) => {
    const groups = match.groups ?? {};
    return {
      id: "async-await",
      language: "go",
      confidence: scoreConfidence(0.6, Boolean(groups.name), true),
      parameters: {
        name: (groups.name ?? "task").trim()
      },
      notes: ["Detected Go goroutine call."]
    };
  });
  if (goroutineCall) {
    matches.push(goroutineCall);
  }

  const goroutineAnon = matchOnce(/\bgo\s+func\s*(?<name>\w+)?\s*\(/, code, (match) => {
    const groups = match.groups ?? {};
    return {
      id: "async-await",
      language: "go",
      confidence: scoreConfidence(0.6, true, Boolean(groups.name)),
      parameters: {
        name: (groups.name ?? "task").trim()
      },
      notes: ["Detected Go goroutine literal."]
    };
  });
  if (goroutineAnon) {
    matches.push(goroutineAnon);
  }

  const listLoop = matchOnce(
    /for\s+_,\s*(?<item>\w+)\s*:=\s*range\s+(?<source>[\w.]+)\s*\{(?<body>[\s\S]*?)\}/m,
    code,
    (match) => {
      const groups = match.groups ?? {};
      const body = groups.body ?? "";
      const appendMatch = /append\(\s*(?<target>\w+)\s*,\s*(?<transform>[^)]+)\)/.exec(body);
      const filterMatch = /if\s+(?<filter>[^{\n]+)\s*\{/.exec(body);
      const item = (groups.item ?? "item").trim();
      const source = (groups.source ?? "items").trim();
      const transform = (appendMatch?.groups?.transform ?? item).trim();
      const filter = (filterMatch?.groups?.filter ?? "").trim();
      return {
        id: "list-comprehension",
        language: "go",
        confidence: scoreConfidence(0.6, Boolean(appendMatch), Boolean(filterMatch)),
        parameters: {
          item,
          source,
          transform,
          filter
        },
        notes: ["Detected Go range append loop."]
      };
    }
  );
  if (listLoop) {
    matches.push(listLoop);
  }

  const dataclass = matchOnce(
    /type\s+(?<name>\w+)\s+struct\s*\{(?<body>[\s\S]*?)\}/m,
    code,
    (match) => {
      const groups = match.groups ?? {};
      return {
        id: "dataclass",
        language: "go",
        confidence: scoreConfidence(0.7, Boolean(groups.name), Boolean(groups.body)),
        parameters: {
          name: (groups.name ?? "Model").trim(),
          body: (groups.body ?? "").trim()
        },
        notes: ["Detected Go struct."]
      };
    }
  );
  if (dataclass) {
    matches.push(dataclass);
  }

  const errorHandling = matchOnce(/if\s+(?<error>\w+)\s*!=\s*nil/, code, (match) => {
    const groups = match.groups ?? {};
    return {
      id: "error-handling",
      language: "go",
      confidence: scoreConfidence(0.65, Boolean(groups.error), /return\s+/.test(code)),
      parameters: {
        errorVar: (groups.error ?? "err").trim()
      },
      notes: ["Detected Go error handling."]
    };
  });
  if (errorHandling) {
    matches.push(errorHandling);
  }

  const dictLiteral = matchOnce(
    /(?:(?<name>\w+)\s*:?=\s*)?map\[[^\]]+\][^{]*\{(?<body>[^}]+)\}/m,
    code,
    (match) => {
      const groups = match.groups ?? {};
      return {
        id: "dict-literal",
        language: "go",
        confidence: scoreConfidence(0.6, Boolean(groups.body), Boolean(groups.name)),
        parameters: {
          name: (groups.name ?? "data").trim(),
          body: (groups.body ?? "").trim()
        },
        notes: ["Detected Go map literal."]
      };
    }
  );
  if (dictLiteral) {
    matches.push(dictLiteral);
  }

  const noneHandling = matchOnce(/if\s+(?<name>\w+)\s*(?<negation>==|!=)\s*nil/, code, (match) => {
    const groups = match.groups ?? {};
    return {
      id: "none-handling",
      language: "go",
      confidence: scoreConfidence(0.6, Boolean(groups.name), true),
      parameters: {
        name: (groups.name ?? "value").trim(),
        negation: groups.negation === "!=" ? "true" : "false"
      },
      notes: ["Detected Go nil check."]
    };
  });
  if (noneHandling) {
    matches.push(noneHandling);
  }

  return matches;
}

function detectJavaPatterns(code: string): PatternMatch[] {
  const matches: PatternMatch[] = [];

  const listComp = matchOnce(
    /(?<source>\w+)\.stream\(\)\.(?<first>filter|map)\((?<firstFn>[^)]+)\)\.(?<second>filter|map)\((?<secondFn>[^)]+)\)/,
    code,
    (match) => {
      const groups = match.groups ?? {};
      const filterFn = (groups.first === "filter" ? groups.firstFn : groups.secondFn) ?? "";
      const mapFn = (groups.first === "map" ? groups.firstFn : groups.secondFn) ?? "";
      return {
        id: "list-comprehension",
        language: "java",
        confidence: scoreConfidence(0.65, Boolean(mapFn), Boolean(filterFn)),
        parameters: {
          source: (groups.source ?? "items").trim(),
          mapFn: mapFn.trim(),
          filterFn: filterFn.trim()
        },
        notes: ["Detected Java stream pipeline."]
      };
    }
  );
  if (listComp) {
    matches.push(listComp);
  }

  const generics = matchOnce(/\bclass\s+\w+<[^>]+>|\binterface\s+\w+<[^>]+>|<\w+\s+extends\s+[^>]+>/, code, () => {
    return {
      id: "generics",
      language: "java",
      confidence: scoreConfidence(0.6, true, /extends/.test(code)),
      parameters: {
        hint: "generics"
      },
      notes: ["Detected Java generics."]
    };
  });
  if (generics) {
    matches.push(generics);
  }

  const iterators = matchOnce(/\bIterator<|\.iterator\(\)|\.stream\(\)/, code, () => {
    return {
      id: "iterators",
      language: "java",
      confidence: scoreConfidence(0.6, true, true),
      parameters: {
        form: "iterator"
      },
      notes: ["Detected Java iterator usage."]
    };
  });
  if (iterators) {
    matches.push(iterators);
  }

  const dataclass = matchOnce(/class\s+(?<name>\w+)\s*\{(?<body>[\s\S]*?)\}/m, code, (match) => {
    const groups = match.groups ?? {};
    return {
      id: "dataclass",
      language: "java",
      confidence: scoreConfidence(0.7, Boolean(groups.name), Boolean(groups.body)),
      parameters: {
        name: (groups.name ?? "Model").trim(),
        body: (groups.body ?? "").trim()
      },
      notes: ["Detected Java class structure."]
    };
  });
  if (dataclass) {
    matches.push(dataclass);
  }

  const closures = matchOnce(/->\s*\{?/, code, () => {
    return {
      id: "closures",
      language: "java",
      confidence: scoreConfidence(0.6, true, true),
      parameters: {
        form: "lambda"
      },
      notes: ["Detected Java lambda."]
    };
  });
  if (closures) {
    matches.push(closures);
  }

  const patternMatching = matchOnce(/\bswitch\s*\([^)]*\)\s*\{[\s\S]*case\s+/m, code, () => {
    return {
      id: "pattern-matching",
      language: "java",
      confidence: scoreConfidence(0.6, true, /case/.test(code)),
      parameters: {
        form: "switch"
      },
      notes: ["Detected Java switch-based matching."]
    };
  });
  if (patternMatching) {
    matches.push(patternMatching);
  }

  const concurrency = matchOnce(/CompletableFuture|ExecutorService|synchronized|java\.util\.concurrent/, code, () => {
    return {
      id: "concurrency-patterns",
      language: "java",
      confidence: scoreConfidence(0.6, true, true),
      parameters: {
        form: "juc"
      },
      notes: ["Detected Java concurrency pattern."]
    };
  });
  if (concurrency) {
    matches.push(concurrency);
  }

  const errorHandling = matchOnce(/try\s*\{[\s\S]*?catch\s*\(|Optional<|Optional\.empty\(|\.isEmpty\(\)/, code, () => {
    return {
      id: "error-handling",
      language: "java",
      confidence: scoreConfidence(0.7, true, /catch|Optional/.test(code)),
      parameters: {
        form: "try-catch"
      },
      notes: ["Detected Java error-handling pattern."]
    };
  });
  if (errorHandling) {
    matches.push(errorHandling);
  }

  return matches;
}

function detectCppPatterns(code: string): PatternMatch[] {
  const matches: PatternMatch[] = [];

  const listComp = matchOnce(/std::(transform|ranges::views::transform)|std::vector<[^>]+>\s+\w+;\s*for\s*\(/, code, () => {
    return {
      id: "list-comprehension",
      language: "cpp",
      confidence: scoreConfidence(0.6, true, true),
      parameters: {
        source: "items",
        mapFn: "[](auto item) { return item; }",
        filterFn: ""
      },
      notes: ["Detected C++ transform or loop-based mapping."]
    };
  });
  if (listComp) {
    matches.push(listComp);
  }

  const errorHandling = matchOnce(/try\s*\{[\s\S]*?catch\s*\(|std::expected<|throw\s+/, code, () => {
    return {
      id: "error-handling",
      language: "cpp",
      confidence: scoreConfidence(0.55, true, /catch|expected/.test(code)),
      parameters: {
        form: "try-catch"
      },
      notes: ["Detected C++ error-handling pattern."]
    };
  });
  if (errorHandling) {
    matches.push(errorHandling);
  }

  const generics = matchOnce(/\btemplate\s*<[^>]+>/, code, () => {
    return {
      id: "generics",
      language: "cpp",
      confidence: scoreConfidence(0.65, true, /concept/.test(code)),
      parameters: {
        hint: "templates"
      },
      notes: ["Detected C++ templates."]
    };
  });
  if (generics) {
    matches.push(generics);
  }

  const iterators = matchOnce(/\.begin\(\)|\.end\(\)|std::(ranges|iterator)|for\s*\([^:]+:[^)]+\)/, code, () => {
    return {
      id: "iterators",
      language: "cpp",
      confidence: scoreConfidence(0.6, true, true),
      parameters: {
        form: "iterator"
      },
      notes: ["Detected C++ iterator usage."]
    };
  });
  if (iterators) {
    matches.push(iterators);
  }

  const closures = matchOnce(/\[[^\]]*\]\s*\([^)]*\)\s*\{/, code, () => {
    return {
      id: "closures",
      language: "cpp",
      confidence: scoreConfidence(0.6, true, true),
      parameters: {
        form: "lambda"
      },
      notes: ["Detected C++ lambda."]
    };
  });
  if (closures) {
    matches.push(closures);
  }

  const patternMatching = matchOnce(/\bswitch\s*\([^)]*\)\s*\{[\s\S]*case\s+/m, code, () => {
    return {
      id: "pattern-matching",
      language: "cpp",
      confidence: scoreConfidence(0.6, true, /case/.test(code)),
      parameters: {
        form: "switch"
      },
      notes: ["Detected C++ switch-based matching."]
    };
  });
  if (patternMatching) {
    matches.push(patternMatching);
  }

  const concurrency = matchOnce(/std::(thread|async|mutex|condition_variable|atomic)/, code, () => {
    return {
      id: "concurrency-patterns",
      language: "cpp",
      confidence: scoreConfidence(0.6, true, true),
      parameters: {
        form: "std"
      },
      notes: ["Detected C++ concurrency pattern."]
    };
  });
  if (concurrency) {
    matches.push(concurrency);
  }

  return matches;
}

function detectTypeScriptListChain(code: string, language: LanguageId): PatternMatch | null {
  const chain = /(?<source>\w+)\.(?<first>filter|map)\((?<firstFn>[^)]*)\)\.(?<second>filter|map)\((?<secondFn>[^)]*)\)/.exec(code);
  if (!chain || !chain.groups) {
    const single = /(?<source>\w+)\.map\((?<mapFn>[^)]*)\)/.exec(code);
    if (!single || !single.groups) {
      return null;
    }
    const singleSource = single.groups.source ?? "";
    const singleMapFn = single.groups.mapFn ?? "";
    return {
      id: "list-comprehension",
      language,
      confidence: scoreConfidence(0.6, Boolean(singleMapFn), Boolean(singleSource)),
      parameters: {
        source: singleSource.trim(),
        mapFn: singleMapFn.trim(),
        filterFn: ""
      },
      notes: ["Detected TypeScript map chain."]
    };
  }
  const { source, first, firstFn, secondFn } = chain.groups;
  const filterFn = (first === "filter" ? firstFn : secondFn) ?? "";
  const mapFn = (first === "map" ? firstFn : secondFn) ?? "";
  const confidence = scoreConfidence(0.7, Boolean(filterFn), Boolean(mapFn));
  return {
    id: "list-comprehension",
    language,
    confidence,
    parameters: {
      source: (source ?? "").trim(),
      mapFn: mapFn.trim(),
      filterFn: filterFn.trim()
    },
    notes: ["Detected TypeScript map/filter chain."]
  };
}

function detectRustIteratorChain(code: string): PatternMatch | null {
  const chain = /(?<source>\w+)\.(?<iter>iter|into_iter)\(\)\.(?<first>filter|map)\((?<firstFn>[^)]*)\)\.(?<second>filter|map)\((?<secondFn>[^)]*)\)\.collect/.exec(
    code
  );
  if (!chain || !chain.groups) {
    const single = /(?<source>\w+)\.(?<iter>iter|into_iter)\(\)\.map\((?<mapFn>[^)]*)\)\.collect/.exec(
      code
    );
    if (!single || !single.groups) {
      return null;
    }
    const singleSource = single.groups.source ?? "";
    const singleMapFn = single.groups.mapFn ?? "";
    return {
      id: "list-comprehension",
      language: "rust",
      confidence: scoreConfidence(0.6, Boolean(singleMapFn), Boolean(singleSource)),
      parameters: {
        source: singleSource.trim(),
        mapFn: singleMapFn.trim(),
        filterFn: ""
      },
      notes: ["Detected Rust iterator map chain."]
    };
  }
  const { source, first, firstFn, secondFn } = chain.groups;
  const filterFn = (first === "filter" ? firstFn : secondFn) ?? "";
  const mapFn = (first === "map" ? firstFn : secondFn) ?? "";
  const confidence = scoreConfidence(0.7, Boolean(filterFn), Boolean(mapFn));
  return {
    id: "list-comprehension",
    language: "rust",
    confidence,
    parameters: {
      source: (source ?? "").trim(),
      mapFn: mapFn.trim(),
      filterFn: filterFn.trim()
    },
    notes: ["Detected Rust iterator chain."]
  };
}

function matchOnce(regex: RegExp, code: string, build: MatchBuilder): PatternMatch | null {
  const match = regex.exec(code);
  if (!match) {
    return null;
  }
  return build(match, code);
}

function scoreConfidence(base: number, ...signals: boolean[]): number {
  const score = signals.reduce((current, signal) => current + (signal ? 0.1 : 0), base);
  return Math.min(1, Number(score.toFixed(2)));
}
