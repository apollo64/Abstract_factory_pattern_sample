import ICheckbox from "./ICheckbox";

class SafariCheckbox implements ICheckbox {
    paint(): void  {
        console.log('Checkbox for Safari');
    };
};

export default SafariCheckbox;
