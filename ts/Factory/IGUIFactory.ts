import IButton from "../Button/IButton";
import ICheckbox from "../Checkbox/ICheckbox";

interface IGUIFactory {
    createButton() : IButton;
    createCheckbox(): ICheckbox; 
}
export default IGUIFactory;
