import IButton from "./Button/IButton";
import IGUIFactory from "./Factory/IGUIFactory";

class Application {
    private _factory : IGUIFactory;
    private _button: IButton | undefined;

    constructor(factory: IGUIFactory) {
        this._factory=factory;

    }
    createUI(): void {
        this._button = this._factory.createButton();

    }
paint():void {
    this._button?.paint();
}
}


export default Application;