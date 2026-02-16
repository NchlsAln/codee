import { BaseCodeTemplates } from "@codee/lang-common";
import { structureTemplate } from "./templates/structure/core";
import { stylingTemplate } from "./templates/styling/core";
import { componentsTemplate } from "./templates/components/core";
import { configurationTemplate } from "./templates/configuration/core";
import { dataSerializationTemplate } from "./templates/data-serialization/core";
import { accessibilityTemplate } from "./templates/accessibility/core";
import { animationTemplate } from "./templates/animation/core";
import { themingTemplate } from "./templates/theming/core";

export class CodeTemplates extends BaseCodeTemplates {
  constructor() {
    super("scss", {
      idioms: [
        "Use variables for design tokens.",
        "Keep nesting shallow.",
        "Prefer @use/@forward over @import."
      ],
      templates: {
        "structure.core": structureTemplate(),
        "styling.core": stylingTemplate(),
        "components.core": componentsTemplate(),
        "configuration.core": configurationTemplate(),
        "data-serialization.core": dataSerializationTemplate(),
        "accessibility.core": accessibilityTemplate(),
        "animation.core": animationTemplate(),
        "theming.core": themingTemplate()
      },
      frameworkTemplates: {},
      testTemplates: {}
    });
  }
}
