"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.yewFrontendTemplate = yewFrontendTemplate;
function yewFrontendTemplate() {
  return [
    "use yew::prelude::*;",
    "",
    "#[function_component(App)]",
    "fn app() -> Html {",
    '    html! { <h1>{"Hello Yew"}</h1> }',
    "}",
  ].join("\n");
}
