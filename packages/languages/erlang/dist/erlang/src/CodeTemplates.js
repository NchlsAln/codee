"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CodeTemplates = void 0;
const lang_common_1 = require("@codee/lang-common");
const collections_1 = require("./templates/stdlib/collections");
const strings_1 = require("./templates/stdlib/strings");
const cowboy_handler_1 = require("./templates/web-frameworks/cowboy-handler");
const webmachine_resource_1 = require("./templates/web-frameworks/webmachine-resource");
const nitrogen_page_1 = require("./templates/web-frameworks/nitrogen-page");
const eunit_1 = require("./templates/testing/eunit");
const mnesia_1 = require("./templates/database/mnesia");
class CodeTemplates extends lang_common_1.BaseCodeTemplates {
    constructor() {
        super("erlang", {
            idioms: ["Favor pattern matching.", "Use OTP conventions."],
            templates: {
                "stdlib.collections": (0, collections_1.collectionsTemplate)(),
                "stdlib.strings": (0, strings_1.stringsTemplate)()
            },
            frameworkTemplates: {
                "web.cowboy.handler": (0, cowboy_handler_1.cowboyHandlerTemplate)(),
                "web.webmachine.resource": (0, webmachine_resource_1.webmachineResourceTemplate)(),
                "web.nitrogen.page": (0, nitrogen_page_1.nitrogenPageTemplate)(),
                "database.mnesia": (0, mnesia_1.mnesiaTemplate)()
            },
            testTemplates: {
                eunit: (0, eunit_1.eunitTemplate)()
            }
        });
    }
}
exports.CodeTemplates = CodeTemplates;
