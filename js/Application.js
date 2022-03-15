"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Application {
    constructor(factory) {
        this._factory = factory;
    }
    createUI() {
        this._button = this._factory.createButton();
    }
    paint() {
        var _a;
        (_a = this._button) === null || _a === void 0 ? void 0 : _a.paint();
    }
}
exports.default = Application;
