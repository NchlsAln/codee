/* eslint-disable @typescript-eslint/no-var-requires, no-console */
const { mkdirSync, writeFileSync } = require("fs");
const { join, dirname } = require("path");

const ROOT = process.cwd();

const renderTemplate = (fnName, lines) => {
  const body = lines.map((line) => `    ${JSON.stringify(line)}`).join(",\n");
  return [
    `export function ${fnName}(): string {`,
    "  return [",
    body,
    "  ].join(\"\\n\");",
    "}",
    ""
  ].join("\n");
};

const TEMPLATE_DATA = {
  html: {
    "structure/core.ts": {
      fn: "structureTemplate",
      lines: [
        "<!doctype html>",
        "<html lang=\"en\">",
        "  <head><meta charset=\"utf-8\"><title>Page</title></head>",
        "  <body>",
        "    <header><h1>Title</h1></header>",
        "    <main><section>Content</section></main>",
        "    <footer>Footer</footer>",
        "  </body>",
        "</html>"
      ]
    },
    "styling/core.ts": {
      fn: "stylingTemplate",
      lines: [
        "<link rel=\"stylesheet\" href=\"styles.css\">",
        "<div class=\"card\">Styled content</div>"
      ]
    },
    "components/core.ts": {
      fn: "componentsTemplate",
      lines: [
        "<article class=\"card\">",
        "  <h2>Card title</h2>",
        "  <p>Card body</p>",
        "  <button type=\"button\">Action</button>",
        "</article>"
      ]
    },
    "configuration/core.ts": {
      fn: "configurationTemplate",
      lines: [
        "<meta name=\"theme-color\" content=\"#0f62fe\">",
        "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">"
      ]
    },
    "data-serialization/core.ts": {
      fn: "dataSerializationTemplate",
      lines: [
        "<script type=\"application/json\" id=\"data\">",
        "  { \"items\": [\"a\", \"b\"] }",
        "</script>"
      ]
    },
    "accessibility/core.ts": {
      fn: "accessibilityTemplate",
      lines: [
        "<nav aria-label=\"Main\">",
        "  <a href=\"/\">Home</a>",
        "</nav>",
        "<img src=\"hero.jpg\" alt=\"Hero image\">"
      ]
    },
    "animation/core.ts": {
      fn: "animationTemplate",
      lines: [
        "<div class=\"fade-in\">Animated</div>"
      ]
    },
    "theming/core.ts": {
      fn: "themingTemplate",
      lines: [
        "<body data-theme=\"dark\">",
        "  <div class=\"panel\">Theme me</div>",
        "</body>"
      ]
    }
  },
  css: {
    "structure/core.ts": {
      fn: "structureTemplate",
      lines: [
        "body { margin: 0; font-family: system-ui; }",
        ".layout { display: grid; grid-template-rows: auto 1fr auto; min-height: 100vh; }"
      ]
    },
    "styling/core.ts": {
      fn: "stylingTemplate",
      lines: [
        ".card { padding: 1.5rem; border-radius: 12px; background: #fff; box-shadow: 0 10px 24px rgba(0,0,0,0.08); }",
        ".card__title { font-size: 1.25rem; margin-bottom: 0.5rem; }"
      ]
    },
    "components/core.ts": {
      fn: "componentsTemplate",
      lines: [
        ".btn { padding: 0.6rem 1rem; border-radius: 8px; border: none; }",
        ".btn--primary { background: #0f62fe; color: #fff; }"
      ]
    },
    "configuration/core.ts": {
      fn: "configurationTemplate",
      lines: [
        ":root { --space-2: 0.5rem; --space-4: 1rem; }",
        ".stack > * + * { margin-top: var(--space-4); }"
      ]
    },
    "data-serialization/core.ts": {
      fn: "dataSerializationTemplate",
      lines: [
        ".stat { display: grid; grid-template-columns: auto 1fr; gap: 0.5rem; }"
      ]
    },
    "accessibility/core.ts": {
      fn: "accessibilityTemplate",
      lines: [
        ":focus-visible { outline: 2px solid #0f62fe; outline-offset: 2px; }",
        "@media (prefers-reduced-motion: reduce) { * { animation: none !important; } }"
      ]
    },
    "animation/core.ts": {
      fn: "animationTemplate",
      lines: [
        "@keyframes fade { from { opacity: 0; } to { opacity: 1; } }",
        ".fade-in { animation: fade 300ms ease-in; }"
      ]
    },
    "theming/core.ts": {
      fn: "themingTemplate",
      lines: [
        ":root { --bg: #fff; --fg: #111; }",
        "[data-theme='dark'] { --bg: #111; --fg: #f5f5f5; }",
        "body { background: var(--bg); color: var(--fg); }"
      ]
    }
  },
  scss: {
    "structure/core.ts": {
      fn: "structureTemplate",
      lines: [
        "$layout-gap: 1.5rem;",
        ".layout { display: grid; gap: $layout-gap; }"
      ]
    },
    "styling/core.ts": {
      fn: "stylingTemplate",
      lines: [
        "$shadow: 0 10px 24px rgba(0,0,0,0.08);",
        ".card { padding: 1.5rem; border-radius: 12px; box-shadow: $shadow; }"
      ]
    },
    "components/core.ts": {
      fn: "componentsTemplate",
      lines: [
        ".btn {",
        "  &--primary { background: $color-primary; color: #fff; }",
        "}"
      ]
    },
    "configuration/core.ts": {
      fn: "configurationTemplate",
      lines: [
        "$spacing: (xs: 0.25rem, sm: 0.5rem, md: 1rem);",
        ".stack > * + * { margin-top: map-get($spacing, md); }"
      ]
    },
    "data-serialization/core.ts": {
      fn: "dataSerializationTemplate",
      lines: [
        "$palette: (primary: #0f62fe, muted: #6f6f6f);",
        ".text-muted { color: map-get($palette, muted); }"
      ]
    },
    "accessibility/core.ts": {
      fn: "accessibilityTemplate",
      lines: [
        ":focus-visible { outline: 2px solid $color-primary; outline-offset: 2px; }"
      ]
    },
    "animation/core.ts": {
      fn: "animationTemplate",
      lines: [
        "@mixin fade-in($dur: 300ms) { animation: fade $dur ease-in; }",
        "@keyframes fade { from { opacity: 0; } to { opacity: 1; } }"
      ]
    },
    "theming/core.ts": {
      fn: "themingTemplate",
      lines: [
        "$theme-light: (bg: #fff, fg: #111);",
        "$theme-dark: (bg: #111, fg: #f5f5f5);"
      ]
    }
  },
  json: {
    "structure/core.ts": {
      fn: "structureTemplate",
      lines: [
        "{",
        "  \"title\": \"Page\",",
        "  \"sections\": [\"hero\", \"features\", \"cta\"]",
        "}"
      ]
    },
    "styling/core.ts": {
      fn: "stylingTemplate",
      lines: [
        "{",
        "  \"theme\": { \"primary\": \"#0f62fe\", \"radius\": 12 }",
        "}"
      ]
    },
    "components/core.ts": {
      fn: "componentsTemplate",
      lines: [
        "{",
        "  \"components\": [{ \"type\": \"button\", \"variant\": \"primary\" }]",
        "}"
      ]
    },
    "configuration/core.ts": {
      fn: "configurationTemplate",
      lines: [
        "{",
        "  \"env\": \"prod\",",
        "  \"features\": { \"beta\": false }",
        "}"
      ]
    },
    "data-serialization/core.ts": {
      fn: "dataSerializationTemplate",
      lines: [
        "{",
        "  \"items\": [{ \"id\": 1, \"name\": \"Item\" }]",
        "}"
      ]
    },
    "accessibility/core.ts": {
      fn: "accessibilityTemplate",
      lines: [
        "{",
        "  \"aria\": { \"label\": \"Search\" }",
        "}"
      ]
    },
    "animation/core.ts": {
      fn: "animationTemplate",
      lines: [
        "{",
        "  \"animation\": { \"name\": \"fade\", \"durationMs\": 300 }",
        "}"
      ]
    },
    "theming/core.ts": {
      fn: "themingTemplate",
      lines: [
        "{",
        "  \"theme\": { \"mode\": \"dark\", \"bg\": \"#111\" }",
        "}"
      ]
    }
  },
  yaml: {
    "structure/core.ts": {
      fn: "structureTemplate",
      lines: [
        "title: Page",
        "sections:",
        "  - hero",
        "  - features",
        "  - cta"
      ]
    },
    "styling/core.ts": {
      fn: "stylingTemplate",
      lines: [
        "theme:",
        "  primary: '#0f62fe'",
        "  radius: 12"
      ]
    },
    "components/core.ts": {
      fn: "componentsTemplate",
      lines: [
        "components:",
        "  - type: button",
        "    variant: primary"
      ]
    },
    "configuration/core.ts": {
      fn: "configurationTemplate",
      lines: [
        "env: prod",
        "features:",
        "  beta: false"
      ]
    },
    "data-serialization/core.ts": {
      fn: "dataSerializationTemplate",
      lines: [
        "items:",
        "  - id: 1",
        "    name: Item"
      ]
    },
    "accessibility/core.ts": {
      fn: "accessibilityTemplate",
      lines: [
        "aria:",
        "  label: Search"
      ]
    },
    "animation/core.ts": {
      fn: "animationTemplate",
      lines: [
        "animation:",
        "  name: fade",
        "  durationMs: 300"
      ]
    },
    "theming/core.ts": {
      fn: "themingTemplate",
      lines: [
        "theme:",
        "  mode: dark",
        "  bg: '#111'"
      ]
    }
  },
  xml: {
    "structure/core.ts": {
      fn: "structureTemplate",
      lines: [
        "<?xml version=\"1.0\" encoding=\"UTF-8\"?>",
        "<page>",
        "  <section id=\"hero\" />",
        "</page>"
      ]
    },
    "styling/core.ts": {
      fn: "stylingTemplate",
      lines: [
        "<style theme=\"default\">",
        "  <color name=\"primary\">#0f62fe</color>",
        "</style>"
      ]
    },
    "components/core.ts": {
      fn: "componentsTemplate",
      lines: [
        "<components>",
        "  <button variant=\"primary\">Save</button>",
        "</components>"
      ]
    },
    "configuration/core.ts": {
      fn: "configurationTemplate",
      lines: [
        "<config>",
        "  <env>prod</env>",
        "  <feature name=\"beta\">false</feature>",
        "</config>"
      ]
    },
    "data-serialization/core.ts": {
      fn: "dataSerializationTemplate",
      lines: [
        "<items>",
        "  <item id=\"1\"><name>Item</name></item>",
        "</items>"
      ]
    },
    "accessibility/core.ts": {
      fn: "accessibilityTemplate",
      lines: [
        "<aria>",
        "  <label>Search</label>",
        "</aria>"
      ]
    },
    "animation/core.ts": {
      fn: "animationTemplate",
      lines: [
        "<animation name=\"fade\" durationMs=\"300\" />"
      ]
    },
    "theming/core.ts": {
      fn: "themingTemplate",
      lines: [
        "<theme mode=\"dark\">",
        "  <bg>#111</bg>",
        "</theme>"
      ]
    }
  }
};

Object.entries(TEMPLATE_DATA).forEach(([lang, templates]) => {
  Object.entries(templates).forEach(([relPath, spec]) => {
    const outPath = join(ROOT, "packages", "languages", lang, "src", "templates", relPath);
    mkdirSync(dirname(outPath), { recursive: true });
    const content = renderTemplate(spec.fn, spec.lines);
    writeFileSync(outPath, content);
  });
});

console.log("Generated Batch 9 templates.");
