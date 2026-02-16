export function actorsTemplate(): string {
  return "package main\n\nimport \"fmt\"\n\ntype Msg struct { Value int }\n\nfunc actor(in <-chan Msg) {\n  for msg := range in {\n    fmt.Println(msg.Value)\n  }\n}\n\nfunc main() {\n  ch := make(chan Msg)\n  go actor(ch)\n  ch <- Msg{Value: 42}\n  close(ch)\n}\n";
}
