import Application from "./Application";
import ChromeFactory from "./Factory/ChromeFactory";
import IGUIFactory from "./Factory/IGUIFactory";
import SafariFactory from "./Factory/SafariFactory";
import detect from 'detect.js';


const user = detect.parse(navigator.userAgent)
console.log(user)

const browser = user.browser.family.toLowerCase();
console.log('browser ', browser)

let factory : IGUIFactory|null=null;

if(browser==='chrome') {
    console.log('oke')
    factory = new ChromeFactory();
    console.log('factory  ', factory)

} else if (browser ==='safari') {
    factory = new SafariFactory();
};
if (factory!==null) {
    const app : Application = new Application(factory);
    app.createUI();
    app.paint();
}