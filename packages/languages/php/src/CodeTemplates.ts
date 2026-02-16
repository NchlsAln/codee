import { BaseCodeTemplates } from "@codee/lang-common";
import { collectionsTemplate } from "./templates/stdlib/collections";
import { stringTemplate } from "./templates/stdlib/strings";
import { laravelControllerTemplate } from "./templates/web-frameworks/laravel-controller";
import { symfonyControllerTemplate } from "./templates/web-frameworks/symfony-controller";
import { wordpressPluginTemplate } from "./templates/web-frameworks/wordpress-plugin";
import { slimRouteTemplate } from "./templates/web-frameworks/slim-route";
import { phpunitTestTemplate } from "./templates/testing/phpunit";
import { pdoQueryTemplate } from "./templates/database/pdo";
import { eloquentModelTemplate } from "./templates/database/eloquent";

export class CodeTemplates extends BaseCodeTemplates {
  constructor() {
    super("php", {
      idioms: ["Prefer modern PHP 8 features.", "Use strict types."],
      templates: {
        "stdlib.collections": collectionsTemplate(),
        "stdlib.strings": stringTemplate()
      },
      frameworkTemplates: {
        "web.laravel.controller": laravelControllerTemplate(),
        "web.symfony.controller": symfonyControllerTemplate(),
        "web.wordpress.plugin": wordpressPluginTemplate(),
        "web.slim.route": slimRouteTemplate(),
        "database.pdo": pdoQueryTemplate(),
        "database.eloquent": eloquentModelTemplate()
      },
      testTemplates: {
        phpunit: phpunitTestTemplate()
      }
    });
  }
}

