import { BaseCodeTemplates } from "@codee/lang-common";
import { collectionsTemplate } from "./templates/stdlib/collections";
import { stringsTemplate } from "./templates/stdlib/strings";
import { railsControllerTemplate } from "./templates/web-frameworks/rails-controller";
import { sinatraRouteTemplate } from "./templates/web-frameworks/sinatra-route";
import { grapeApiTemplate } from "./templates/web-frameworks/grape-api";
import { sidekiqWorkerTemplate } from "./templates/web-frameworks/sidekiq-worker";
import { rspecTemplate } from "./templates/testing/rspec";
import { activeRecordModelTemplate } from "./templates/database/active-record";

export class CodeTemplates extends BaseCodeTemplates {
  constructor() {
    super("ruby", {
      idioms: ["Prefer idiomatic Ruby.", "Use blocks and enumerables."],
      templates: {
        "stdlib.collections": collectionsTemplate(),
        "stdlib.strings": stringsTemplate()
      },
      frameworkTemplates: {
        "web.rails.controller": railsControllerTemplate(),
        "web.sinatra.route": sinatraRouteTemplate(),
        "web.grape.api": grapeApiTemplate(),
        "web.sidekiq.worker": sidekiqWorkerTemplate(),
        "database.active_record": activeRecordModelTemplate()
      },
      testTemplates: {
        rspec: rspecTemplate()
      }
    });
  }
}

