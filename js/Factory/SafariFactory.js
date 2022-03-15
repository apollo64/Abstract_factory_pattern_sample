"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SafariButton_1 = __importDefault(require("../Button/SafariButton"));
const SafariCheckbox_1 = __importDefault(require("../Checkbox/SafariCheckbox"));
class SafariFactory {
    createButton() {
        return new SafariButton_1.default();
    }
    ;
    createCheckbox() {
        return new SafariCheckbox_1.default;
    }
    ;
}
exports.default = SafariFactory;
