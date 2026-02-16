"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parallelTemplate = parallelTemplate;
function parallelTemplate() {
    return "package main\n\nimport (\n  \"fmt\"\n  \"sync\"\n)\n\nfunc main() {\n  var wg sync.WaitGroup\n  for i := 0; i < 3; i++ {\n    wg.Add(1)\n    go func(n int) {\n      defer wg.Done()\n      fmt.Println(n * n)\n    }(i)\n  }\n  wg.Wait()\n}\n";
}
