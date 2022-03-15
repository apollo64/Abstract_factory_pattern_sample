"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ChromeButton_1 = __importDefault(require("../Button/ChromeButton"));
const ChromeCheckbox_1 = __importDefault(require("../Checkbox/ChromeCheckbox"));
class ChromeFactory {
    createButton() {
        return new ChromeButton_1.default();
    }
    ;
    createCheckbox() {
        return new ChromeCheckbox_1.default;
    }
    ;
}
exports.default = ChromeFactory;
