"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.concurrencyImplementations = void 0;
exports.concurrencyImplementations = {
    "concurrency.mutex": [
        {
            language: "python",
            description: "threading.Lock guarding shared counter",
            snippet: "from threading import Lock\nlock = Lock()\nwith lock:\n    counter += 1"
        },
        {
            language: "typescript",
            description: "Mutex abstraction in Node",
            snippet: "await mutex.runExclusive(() => {\n  counter += 1;\n});"
        },
        {
            language: "rust",
            description: "std::sync::Mutex around shared state",
            snippet: "let counter = Mutex::new(0);\n*counter.lock().unwrap() += 1;"
        },
        {
            language: "go",
            description: "sync.Mutex guarding shared counter",
            snippet: "var mu sync.Mutex\nmu.Lock()\ncounter += 1\nmu.Unlock()"
        },
        {
            language: "java",
            description: "synchronized block",
            snippet: "synchronized (lock) {\n  counter += 1;\n}"
        },
        {
            language: "cpp",
            description: "std::mutex lock_guard",
            snippet: "std::lock_guard<std::mutex> guard(mu);\ncounter += 1;"
        }
    ],
    "concurrency.channel": [
        {
            language: "python",
            description: "asyncio.Queue for async message passing",
            snippet: "queue = asyncio.Queue()\nawait queue.put(msg)"
        },
        {
            language: "typescript",
            description: "Async iterator channel",
            snippet: "for await (const msg of channel) {\n  handle(msg);\n}"
        },
        {
            language: "rust",
            description: "std::sync::mpsc channel",
            snippet: "let (tx, rx) = mpsc::channel();\ntx.send(msg)?;"
        },
        {
            language: "go",
            description: "Go channel with goroutine",
            snippet: "ch := make(chan Message)\ngo func() {\n  ch <- msg\n}()"
        },
        {
            language: "java",
            description: "BlockingQueue",
            snippet: "BlockingQueue<Message> queue = new LinkedBlockingQueue<>();\nqueue.put(msg);"
        },
        {
            language: "cpp",
            description: "Queue with condition_variable",
            snippet: "std::queue<Message> q;\nstd::unique_lock<std::mutex> lock(mu);\nq.push(msg);\ncv.notify_one();"
        }
    ],
    "concurrency.goroutine": [
        {
            language: "go",
            description: "Launch a goroutine",
            snippet: "go func() {\n  doWork()\n}()"
        }
    ],
    "concurrency.select": [
        {
            language: "go",
            description: "Select on channels",
            snippet: "select {\ncase msg := <-ch:\n  _ = msg\ncase <-done:\n  return\n}"
        }
    ]
};
