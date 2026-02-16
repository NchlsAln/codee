export function channelsTemplate(): string {
  return "package main\n\nimport \"fmt\"\n\nfunc main() {\n  ch := make(chan int, 2)\n  ch <- 1\n  ch <- 2\n  close(ch)\n  for v := range ch {\n    fmt.Println(v)\n  }\n}\n";
}
