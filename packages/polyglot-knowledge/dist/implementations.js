"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.conceptImplementations = void 0;
const implementations_1 = require("./concepts/concurrency/implementations");
exports.conceptImplementations = {
    ...implementations_1.concurrencyImplementations,
    "control-flow.async-await": [
        {
            language: "python",
            description: "async def with await",
            snippet: "async def fetch_data(client):\n    data = await client.get()\n    return data"
        },
        {
            language: "typescript",
            description: "async function returning Promise",
            snippet: "export async function fetchData(client: Client) {\n  const data = await client.get();\n  return data;\n}"
        },
        {
            language: "rust",
            description: "async fn with .await",
            snippet: "async fn fetch_data(client: Client) -> Result<Data, Error> {\n    let data = client.get().await?;\n    Ok(data)\n}"
        },
        {
            language: "go",
            description: "Goroutine with channel",
            snippet: "ch := make(chan Data)\ngo func() {\n  data := client.Get()\n  ch <- data\n}()\nresult := <-ch"
        },
        {
            language: "java",
            description: "CompletableFuture pipeline",
            snippet: "CompletableFuture<Data> future = client.getAsync()\n  .thenApply(data -> data);"
        },
        {
            language: "cpp",
            description: "std::async future",
            snippet: "auto future = std::async(std::launch::async, [&] { return client.get(); });\nauto data = future.get();"
        }
    ],
    "control-flow.exceptions": [
        {
            language: "python",
            description: "try/except",
            snippet: "try:\n    result = do_work()\nexcept Exception as err:\n    handle(err)"
        },
        {
            language: "typescript",
            description: "try/catch",
            snippet: "try {\n  const result = doWork();\n} catch (err) {\n  handle(err);\n}"
        },
        {
            language: "rust",
            description: "Result with match",
            snippet: "let result = do_work();\nmatch result {\n  Ok(value) => handle(value),\n  Err(err) => handle(err),\n}"
        },
        {
            language: "go",
            description: "Explicit error checks",
            snippet: "result, err := doWork()\nif err != nil {\n  handle(err)\n}"
        },
        {
            language: "java",
            description: "try/catch with checked exception",
            snippet: "try {\n  result = doWork();\n} catch (IOException err) {\n  handle(err);\n}"
        },
        {
            language: "cpp",
            description: "try/catch with std::exception",
            snippet: "try {\n  auto result = doWork();\n} catch (const std::exception& err) {\n  handle(err);\n}"
        }
    ],
    "control-flow.error-returns": [
        {
            language: "go",
            description: "Return error alongside result",
            snippet: "func load() (Data, error) {\n  if err != nil {\n    return Data{}, err\n  }\n  return data, nil\n}"
        }
    ],
    "control-flow.panic-recover": [
        {
            language: "go",
            description: "Recover from panic",
            snippet: "func safe() {\n  defer func() {\n    if r := recover(); r != nil {\n      // handle panic\n    }\n  }()\n  panic(\"boom\")\n}"
        }
    ],
    "data-structures.list": [
        {
            language: "python",
            description: "List comprehension",
            snippet: "[item.id for item in items if item.active]"
        },
        {
            language: "typescript",
            description: "Map + filter",
            snippet: "items.filter(item => item.active).map(item => item.id)"
        },
        {
            language: "rust",
            description: "Iterator chain",
            snippet: "items.iter().filter(|item| item.active).map(|item| item.id).collect::<Vec<_>>()"
        },
        {
            language: "go",
            description: "Range loop with append",
            snippet: "result := make([]int, 0)\nfor _, item := range items {\n  if item.Active {\n    result = append(result, item.ID)\n  }\n}"
        },
        {
            language: "java",
            description: "Stream filter/map",
            snippet: "List<Integer> result = items.stream()\n  .filter(Item::isActive)\n  .map(Item::getId)\n  .toList();"
        },
        {
            language: "cpp",
            description: "STL algorithm pipeline",
            snippet: "std::vector<int> result;\nstd::copy_if(items.begin(), items.end(), std::back_inserter(result),\n             [](const Item& item) { return item.active; });"
        }
    ],
    "data-structures.gc": [
        {
            language: "java",
            description: "GC with weak and phantom references",
            snippet: "ReferenceQueue<Object> queue = new ReferenceQueue<>();\nObject value = new Object();\nWeakReference<Object> weak = new WeakReference<>(value);\nPhantomReference<Object> phantom = new PhantomReference<>(value, queue);"
        }
    ],
    "data-structures.stack-vs-heap": [
        {
            language: "cpp",
            description: "Stack allocation and smart pointers",
            snippet: "Widget stackWidget;\nauto owned = std::make_unique<Widget>();\nWidget* raw = new Widget();\n// avoid raw new/delete\ndelete raw;"
        }
    ],
    "data-structures.slice": [
        {
            language: "go",
            description: "Slice append and capacity growth",
            snippet: "values := []int{1, 2}\nvalues = append(values, 3)"
        }
    ],
    "data-structures.struct": [
        {
            language: "go",
            description: "Struct with fields",
            snippet: "type User struct {\n  ID int\n  Name string\n}"
        }
    ],
    "paradigms.oop": [
        {
            language: "java",
            description: "Interface with implementation",
            snippet: "interface Service {\n  void run();\n}\n\nclass Worker implements Service {\n  public void run() {}\n}"
        },
        {
            language: "cpp",
            description: "Abstract base class",
            snippet: "struct Service {\n  virtual void run() = 0;\n  virtual ~Service() = default;\n};\n\nstruct Worker : Service {\n  void run() override {}\n};"
        }
    ],
    "paradigms.decorators": [
        {
            language: "python",
            description: "Function decorator",
            snippet: "@memoize\ndef compute(x: int) -> int:\n    return x * x"
        },
        {
            language: "typescript",
            description: "Class decorator",
            snippet: "@sealed\nexport class Service {\n  // ...\n}"
        },
        {
            language: "rust",
            description: "Attribute macro",
            snippet: "#[derive(Debug, Clone)]\nstruct Service {\n  // ...\n}"
        },
        {
            language: "go",
            description: "Function wrapper",
            snippet: "func withLogging(next func() error) func() error {\n  return func() error {\n    // log\n    return next()\n  }\n}"
        },
        {
            language: "java",
            description: "Annotations",
            snippet: "@Transactional\npublic void save() {\n  // ...\n}"
        },
        {
            language: "cpp",
            description: "Attributes",
            snippet: "[[nodiscard]] int compute();"
        }
    ],
    "paradigms.dataclasses": [
        {
            language: "python",
            description: "@dataclass",
            snippet: "@dataclass\nclass User:\n    id: int\n    name: str"
        },
        {
            language: "typescript",
            description: "Interface",
            snippet: "export interface User {\n  id: number;\n  name: string;\n}"
        },
        {
            language: "rust",
            description: "Struct with derive",
            snippet: "#[derive(Debug, Clone)]\nstruct User {\n  id: i32,\n  name: String,\n}"
        },
        {
            language: "go",
            description: "Struct",
            snippet: "type User struct {\n  ID int\n  Name string\n}"
        },
        {
            language: "java",
            description: "Record",
            snippet: "public record User(int id, String name) {}"
        },
        {
            language: "cpp",
            description: "Struct",
            snippet: "struct User {\n  int id;\n  std::string name;\n};"
        }
    ],
    "paradigms.generics": [
        {
            language: "python",
            description: "Generic container",
            snippet: "from typing import Generic, TypeVar\n\nT = TypeVar(\"T\")\n\nclass Box(Generic[T]):\n    def __init__(self, value: T):\n        self.value = value"
        },
        {
            language: "typescript",
            description: "Generic function",
            snippet: "export function identity<T>(value: T): T {\n  return value;\n}"
        },
        {
            language: "rust",
            description: "Generic function with trait bound",
            snippet: "fn identity<T: Clone>(value: T) -> T {\n  value.clone()\n}"
        },
        {
            language: "go",
            description: "Generic function with constraint",
            snippet: "func Identity[T any](value T) T {\n  return value\n}"
        },
        {
            language: "java",
            description: "Generic class with bounds",
            snippet: "class Box<T extends Number> {\n  private final T value;\n  Box(T value) { this.value = value; }\n}"
        },
        {
            language: "cpp",
            description: "Template function",
            snippet: "template <typename T>\nT identity(T value) {\n  return value;\n}"
        }
    ],
    "data-structures.iterators": [
        {
            language: "python",
            description: "Generator",
            snippet: "def iter_items(items):\n    for item in items:\n        yield item"
        },
        {
            language: "typescript",
            description: "Generator function",
            snippet: "export function* iterItems(items: string[]) {\n  for (const item of items) {\n    yield item;\n  }\n}"
        },
        {
            language: "rust",
            description: "Iterator adapter",
            snippet: "let iter = items.iter().map(|item| item.id);"
        },
        {
            language: "go",
            description: "Range over slice",
            snippet: "for _, item := range items {\n  _ = item\n}"
        },
        {
            language: "java",
            description: "Iterator",
            snippet: "for (Iterator<Item> it = items.iterator(); it.hasNext();) {\n  Item item = it.next();\n}"
        },
        {
            language: "cpp",
            description: "Range-based for",
            snippet: "for (const auto& item : items) {\n  (void)item;\n}"
        }
    ],
    "paradigms.closures": [
        {
            language: "python",
            description: "Lambda closure",
            snippet: "scale = 2\nfn = lambda x: x * scale"
        },
        {
            language: "typescript",
            description: "Arrow function closure",
            snippet: "const scale = 2;\nconst fn = (x: number) => x * scale;"
        },
        {
            language: "rust",
            description: "Closure with move",
            snippet: "let scale = 2;\nlet add = move |x: i32| x + scale;"
        },
        {
            language: "go",
            description: "Function literal",
            snippet: "scale := 2\nfn := func(x int) int {\n  return x * scale\n}"
        },
        {
            language: "java",
            description: "Lambda expression",
            snippet: "int scale = 2;\nFunction<Integer, Integer> fn = x -> x * scale;"
        },
        {
            language: "cpp",
            description: "Lambda with capture",
            snippet: "int scale = 2;\nauto fn = [scale](int x) { return x * scale; };"
        }
    ],
    "control-flow.pattern-matching": [
        {
            language: "python",
            description: "match/case",
            snippet: "match value:\n    case 0:\n        handle_zero()\n    case _:\n        handle_other()"
        },
        {
            language: "typescript",
            description: "Switch on discriminant",
            snippet: "switch (value.kind) {\n  case \"a\":\n    handleA(value);\n    break;\n  default:\n    handleOther(value);\n}"
        },
        {
            language: "rust",
            description: "match expression",
            snippet: "match value {\n  0 => handle_zero(),\n  _ => handle_other(),\n}"
        },
        {
            language: "go",
            description: "Type switch",
            snippet: "switch v := value.(type) {\ncase int:\n  _ = v\ndefault:\n  // handle other\n}"
        },
        {
            language: "java",
            description: "Switch expression",
            snippet: "var result = switch (value) {\n  case 0 -> handleZero();\n  default -> handleOther();\n};"
        },
        {
            language: "cpp",
            description: "Switch statement",
            snippet: "switch (value) {\n  case 0: handle_zero(); break;\n  default: handle_other();\n}"
        }
    ],
    "concurrency.patterns": [
        {
            language: "python",
            description: "asyncio gather",
            snippet: "results = await asyncio.gather(task_a(), task_b())"
        },
        {
            language: "typescript",
            description: "Promise.all",
            snippet: "const [a, b] = await Promise.all([taskA(), taskB()]);"
        },
        {
            language: "rust",
            description: "tokio join",
            snippet: "let (a, b) = tokio::join!(task_a(), task_b());"
        },
        {
            language: "go",
            description: "WaitGroup fan-out",
            snippet: "var wg sync.WaitGroup\nwg.Add(2)\ngo func() { defer wg.Done(); taskA() }()\ngo func() { defer wg.Done(); taskB() }()\nwg.Wait()"
        },
        {
            language: "java",
            description: "CompletableFuture allOf",
            snippet: "CompletableFuture<Void> all = CompletableFuture.allOf(taskA(), taskB());\nall.join();"
        },
        {
            language: "cpp",
            description: "std::async fan-out",
            snippet: "auto a = std::async(std::launch::async, taskA);\nauto b = std::async(std::launch::async, taskB);\na.get();\nb.get();"
        }
    ]
};
