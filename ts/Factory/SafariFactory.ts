import IButton from "../Button/IButton";
import SafariButton from "../Button/SafariButton";
import ICheckbox from "../Checkbox/ICheckbox";
import SafariCheckbox from "../Checkbox/SafariCheckbox";
import IGUIFactory from "./IGUIFactory";


class SafariFactory implements IGUIFactory{
    createButton(): IButton {
        return new SafariButton();
    };
    createCheckbox(): ICheckbox {
        return new SafariCheckbox;
    };
}

export default SafariFactory;
