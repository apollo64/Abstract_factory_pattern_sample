"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Application_1 = __importDefault(require("./Application"));
const ChromeFactory_1 = __importDefault(require("./Factory/ChromeFactory"));
const SafariFactory_1 = __importDefault(require("./Factory/SafariFactory"));
const detect_js_1 = __importDefault(require("detect.js"));
const user = detect_js_1.default.parse(navigator.userAgent);
console.log(user);
const browser = user.browser.family.toLowerCase();
console.log('browser ', browser);
let factory = null;
if (browser === 'chrome') {
    console.log('oke');
    factory = new ChromeFactory_1.default();
    console.log('factory  ', factory);
}
else if (browser === 'safari') {
    factory = new SafariFactory_1.default();
}
;
if (factory !== null) {
    const app = new Application_1.default(factory);
    app.createUI();
    app.paint();
}
