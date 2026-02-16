"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CodeTemplates = void 0;
const lang_common_1 = require("@codee/lang-common");
const collections_1 = require("./templates/stdlib/collections");
const strings_1 = require("./templates/stdlib/strings");
const phoenix_controller_1 = require("./templates/web-frameworks/phoenix-controller");
const plug_router_1 = require("./templates/web-frameworks/plug-router");
const liveview_1 = require("./templates/web-frameworks/liveview");
const exunit_1 = require("./templates/testing/exunit");
const ecto_schema_1 = require("./templates/database/ecto-schema");
class CodeTemplates extends lang_common_1.BaseCodeTemplates {
    constructor() {
        super("elixir", {
            idioms: ["Use pattern matching.", "Favor pipelines for clarity."],
            templates: {
                "stdlib.collections": (0, collections_1.collectionsTemplate)(),
                "stdlib.strings": (0, strings_1.stringsTemplate)()
            },
            frameworkTemplates: {
                "web.phoenix.controller": (0, phoenix_controller_1.phoenixControllerTemplate)(),
                "web.plug.router": (0, plug_router_1.plugRouterTemplate)(),
                "web.liveview": (0, liveview_1.liveViewTemplate)(),
                "database.ecto.schema": (0, ecto_schema_1.ectoSchemaTemplate)()
            },
            testTemplates: {
                exunit: (0, exunit_1.exUnitTemplate)()
            }
        });
    }
}
exports.CodeTemplates = CodeTemplates;
