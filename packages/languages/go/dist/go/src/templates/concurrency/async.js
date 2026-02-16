"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.asyncTemplate = asyncTemplate;
function asyncTemplate() {
    return "package main\n\nimport (\n  \"fmt\"\n  \"time\"\n)\n\nfunc work(name string, delay time.Duration, out chan<- string) {\n  time.Sleep(delay)\n  out <- name + \" done\"\n}\n\nfunc main() {\n  out := make(chan string, 2)\n  go work(\"a\", 200*time.Millisecond, out)\n  go work(\"b\", 100*time.Millisecond, out)\n  fmt.Println(<-out)\n  fmt.Println(<-out)\n}\n";
}
