import IButton from "../Button/IButton";
import ChromeButton from "../Button/ChromeButton";
import ICheckbox from "../Checkbox/ICheckbox";
import ChromeCheckbox from "../Checkbox/ChromeCheckbox";
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
