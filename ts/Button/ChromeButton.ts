import IButton from "./IButton";

class ChromeButton implements IButton{
    paint():void {
        console.log('Кнопка для Хрома')
    };
};

export default ChromeButton;