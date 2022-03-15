import IButton from "./IButton";

class SafariButton implements IButton{
    paint():void {
        console.log('Кнопка для Сафари')
    };
};

export default SafariButton;