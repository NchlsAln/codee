"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CodeTemplates = void 0;
const lang_common_1 = require("@codee/lang-common");
const core_1 = require("./templates/structure/core");
const core_2 = require("./templates/styling/core");
const core_3 = require("./templates/components/core");
const core_4 = require("./templates/configuration/core");
const core_5 = require("./templates/data-serialization/core");
const core_6 = require("./templates/accessibility/core");
const core_7 = require("./templates/animation/core");
const core_8 = require("./templates/theming/core");
class CodeTemplates extends lang_common_1.BaseCodeTemplates {
    constructor() {
        super("html", {
            idioms: [
                "Use semantic elements and landmarks.",
                "Provide alt text for images.",
                "Ensure form inputs have labels."
            ],
            templates: {
                "structure.core": (0, core_1.structureTemplate)(),
                "styling.core": (0, core_2.stylingTemplate)(),
                "components.core": (0, core_3.componentsTemplate)(),
                "configuration.core": (0, core_4.configurationTemplate)(),
                "data-serialization.core": (0, core_5.dataSerializationTemplate)(),
                "accessibility.core": (0, core_6.accessibilityTemplate)(),
                "animation.core": (0, core_7.animationTemplate)(),
                "theming.core": (0, core_8.themingTemplate)()
            },
            frameworkTemplates: {},
            testTemplates: {}
        });
    }
}
exports.CodeTemplates = CodeTemplates;
