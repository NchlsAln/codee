"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.actorsTemplate = actorsTemplate;
function actorsTemplate() {
    return "package main\n\nimport \"fmt\"\n\ntype Msg struct { Value int }\n\nfunc actor(in <-chan Msg) {\n  for msg := range in {\n    fmt.Println(msg.Value)\n  }\n}\n\nfunc main() {\n  ch := make(chan Msg)\n  go actor(ch)\n  ch <- Msg{Value: 42}\n  close(ch)\n}\n";
}
