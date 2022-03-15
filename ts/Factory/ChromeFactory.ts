import IButton from "../Button/IButton";
import ChromeButton from "../Button/SafariButton";
import ICheckbox from "../Checkbox/ICheckbox";
import ChromeCheckbox from "../Checkbox/SafariCheckbox";
import IGUIFactory from "./IGUIFactory";


class ChromeFactory implements IGUIFactory{
    createButton(): IButton {
        return new ChromeButton();
    };
    createCheckbox(): ICheckbox {
        return new ChromeCheckbox;
    };
}

export default ChromeFactory;
