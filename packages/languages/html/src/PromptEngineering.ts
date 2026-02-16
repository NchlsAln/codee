import { BasePromptEngineering } from "@codee/lang-common";

export class PromptEngineering extends BasePromptEngineering {
  constructor() {
    super("html", {
      systemPrompt:
        "You are an HTML expert. Emphasize semantic structure, accessibility, and progressive enhancement.",
      fewShotExamples: [
        {
          task: "Accessible image",
          input: "add product image",
          output: "<img src=\"/img/shoe.jpg\" alt=\"Black running shoe\" loading=\"lazy\">"
        },
        {
          task: "Navigation",
          input: "site nav",
          output: "<nav aria-label=\"Main\"><ul><li><a href=\"/\">Home</a></li></ul></nav>"
        },
        {
          task: "Form field",
          input: "email input",
          output: "<label for=\"email\">Email</label><input id=\"email\" type=\"email\" autocomplete=\"email\">"
        }
      ],
      contextHints: [
        "Use semantic elements before adding ARIA roles.",
        "Provide alt text for meaningful images.",
        "Ensure heading order is logical (h1 -> h2...).",
        "Prefer buttons for actions and links for navigation.",
        "Include lang attribute on the html element."
      ]
    });
  }
}

