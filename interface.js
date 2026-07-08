/* 
Кнопка список /колонки должна иметь две функции. В зависимости от отображаемого на экране режима соответствующее слово должно выделяться ярким белым цветом.
Вариант с двумя панелями должен иметь яркую черту посередине как показано на рисунке.
Информация в карточках должна быть аккуратно организована и корректно отображаться независимо от размера экрана.
*/

//const { createElement } = require("react");

let log = console.log;
let resetSelection = document.getElementById("reset-selection");
let groupDescription = document.getElementById("group-description");
let selectDescription = document.getElementById("select-description");
let displaySettings = document.getElementById("display-settings"); 
let changeSrceDest = document.getElementById("changeSrceDest"); 
let footer = document.querySelector("footer");
let tabs = document.getElementsByClassName("tabs");
let main = document.querySelector("main");
let header = document.querySelector("header");
let bottom = document.getElementsByClassName("bottom");
let options = document.getElementsByClassName("options");
let elements = document.getElementsByClassName("lables");

let menuNavigaton = document.getElementById("menu-navigaton");
let buttons = document.querySelectorAll("button"); 
//let buttons = document.querySelectorAll("button"); 
let settingsOn = false;
menuNavigaton.style.display = "none";
header.style.height = "0"; 
log(buttons);
log(buttons[0].textContent);
let newValues = ["","list colums", "card icons", "cropping", "gallery screen", "two panels"];
let oldValues = ["reset selection","group description", "select description", "transfer media", "change srce/ dest", "display settings"];


displaySettings.addEventListener("click", function(){
    let images = document.querySelectorAll("img");
    //log(buttons[0]);
   // buttons[0].innerHTML = "<img src='arrow_icon.png'>"
    for (let i = 0; i <= newValues.length - 1; i++) {
        //log(buttons[i].textContent);
        buttons[i].textContent = newValues[i];
    }
    })

for (let i = 0; i < buttons; i++) {
    buttons[i].addEventListener("click", function(){
        if (buttons[i].textContent.trim() === "list colums"){
            console.log("list");
        };
        if (buttons[i].textContent.trim() === "select description"){
            console.log("select description");
        };
    });
}

tabs[0].addEventListener("click", function(){
    console.log("hello");
     menuNavigaton.style.display = "block";
    tabs[0].style.bottom = "10vh";
});

tabs[1].addEventListener("click", function(){
    log("hello");
     menuNavigaton.style.display = "block";
    tabs[0].style.bottom = "10vh";
});