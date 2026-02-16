"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.concurrencyPatterns = void 0;
exports.concurrencyPatterns = [
    {
        id: "concurrency.mutex",
        name: "Mutex Guarded State",
        category: "concurrency",
        description: "Protect shared state with a mutual exclusion lock.",
        tags: ["mutex", "lock", "shared-state"]
    },
    {
        id: "concurrency.channel",
        name: "Message Passing Channel",
        category: "concurrency",
        description: "Coordinate work using channels and message passing.",
        tags: ["channel", "csp", "message"]
    },
    {
        id: "concurrency.goroutine",
        name: "Goroutine",
        category: "concurrency",
        description: "Launch lightweight concurrent tasks with goroutines.",
        tags: ["goroutine", "go", "concurrency"]
    },
    {
        id: "concurrency.select",
        name: "Select",
        category: "concurrency",
        description: "Wait on multiple channel operations with select.",
        tags: ["select", "channel", "go"]
    },
    {
        id: "concurrency.patterns",
        name: "Concurrency Patterns",
        category: "concurrency",
        description: "Higher-level concurrency patterns like joins, pools, and fan-out/fan-in.",
        tags: ["concurrency", "join", "fan-in", "fan-out"]
    },
    {
        id: "concurrency.actor",
        name: "Actor Model",
        category: "concurrency",
        description: "Isolate state inside actors and communicate by messages.",
        tags: ["actor", "mailbox", "message"]
    }
];
