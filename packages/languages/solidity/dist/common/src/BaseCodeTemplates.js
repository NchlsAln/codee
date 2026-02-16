"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseCodeTemplates = void 0;
class BaseCodeTemplates {
    languageId;
    config;
    constructor(languageId, config) {
        this.languageId = languageId;
        this.config = config;
    }
    getTemplates() {
        return this.config;
    }
}
exports.BaseCodeTemplates = BaseCodeTemplates;
