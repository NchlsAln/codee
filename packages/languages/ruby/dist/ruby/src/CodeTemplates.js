"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CodeTemplates = void 0;
const lang_common_1 = require("@codee/lang-common");
const collections_1 = require("./templates/stdlib/collections");
const strings_1 = require("./templates/stdlib/strings");
const rails_controller_1 = require("./templates/web-frameworks/rails-controller");
const sinatra_route_1 = require("./templates/web-frameworks/sinatra-route");
const grape_api_1 = require("./templates/web-frameworks/grape-api");
const sidekiq_worker_1 = require("./templates/web-frameworks/sidekiq-worker");
const rspec_1 = require("./templates/testing/rspec");
const active_record_1 = require("./templates/database/active-record");
class CodeTemplates extends lang_common_1.BaseCodeTemplates {
    constructor() {
        super("ruby", {
            idioms: ["Prefer idiomatic Ruby.", "Use blocks and enumerables."],
            templates: {
                "stdlib.collections": (0, collections_1.collectionsTemplate)(),
                "stdlib.strings": (0, strings_1.stringsTemplate)()
            },
            frameworkTemplates: {
                "web.rails.controller": (0, rails_controller_1.railsControllerTemplate)(),
                "web.sinatra.route": (0, sinatra_route_1.sinatraRouteTemplate)(),
                "web.grape.api": (0, grape_api_1.grapeApiTemplate)(),
                "web.sidekiq.worker": (0, sidekiq_worker_1.sidekiqWorkerTemplate)(),
                "database.active_record": (0, active_record_1.activeRecordModelTemplate)()
            },
            testTemplates: {
                rspec: (0, rspec_1.rspecTemplate)()
            }
        });
    }
}
exports.CodeTemplates = CodeTemplates;
