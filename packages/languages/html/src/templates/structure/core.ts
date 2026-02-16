export function structureTemplate(): string {
  return [
    "<!doctype html>",
    "<html lang=\"en\">",
    "  <head><meta charset=\"utf-8\"><title>Page</title></head>",
    "  <body>",
    "    <header><h1>Title</h1></header>",
    "    <main><section>Content</section></main>",
    "    <footer>Footer</footer>",
    "  </body>",
    "</html>"
  ].join("\n");
}
