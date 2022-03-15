import ICheckbox from "./ICheckbox";

class ChromeCheckbox implements ICheckbox {
    paint(): void  {
        console.log('Checkbox for Chrome');
    };
};

export default ChromeCheckbox;
