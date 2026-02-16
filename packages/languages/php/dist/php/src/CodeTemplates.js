"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CodeTemplates = void 0;
const lang_common_1 = require("@codee/lang-common");
const collections_1 = require("./templates/stdlib/collections");
const strings_1 = require("./templates/stdlib/strings");
const laravel_controller_1 = require("./templates/web-frameworks/laravel-controller");
const symfony_controller_1 = require("./templates/web-frameworks/symfony-controller");
const wordpress_plugin_1 = require("./templates/web-frameworks/wordpress-plugin");
const slim_route_1 = require("./templates/web-frameworks/slim-route");
const phpunit_1 = require("./templates/testing/phpunit");
const pdo_1 = require("./templates/database/pdo");
const eloquent_1 = require("./templates/database/eloquent");
class CodeTemplates extends lang_common_1.BaseCodeTemplates {
    constructor() {
        super("php", {
            idioms: ["Prefer modern PHP 8 features.", "Use strict types."],
            templates: {
                "stdlib.collections": (0, collections_1.collectionsTemplate)(),
                "stdlib.strings": (0, strings_1.stringTemplate)()
            },
            frameworkTemplates: {
                "web.laravel.controller": (0, laravel_controller_1.laravelControllerTemplate)(),
                "web.symfony.controller": (0, symfony_controller_1.symfonyControllerTemplate)(),
                "web.wordpress.plugin": (0, wordpress_plugin_1.wordpressPluginTemplate)(),
                "web.slim.route": (0, slim_route_1.slimRouteTemplate)(),
                "database.pdo": (0, pdo_1.pdoQueryTemplate)(),
                "database.eloquent": (0, eloquent_1.eloquentModelTemplate)()
            },
            testTemplates: {
                phpunit: (0, phpunit_1.phpunitTestTemplate)()
            }
        });
    }
}
exports.CodeTemplates = CodeTemplates;
