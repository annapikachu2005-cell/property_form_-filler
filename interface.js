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
let images = document.querySelectorAll("img");
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

//buttons[0].addEventListener("click", function(){alert("OK!!")})
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function(){
        if (buttons[i].textContent.trim() === "list colums"){
            console.log("list");
        };
        if (buttons[i].textContent.trim() === "card icons"){
            console.log("card icons");
                for (let j = 0; j < options.length; j++) {
        bottom[j].style.display = "none";
        images[j].style.height = "130%";
        options[j].style.display = "flex";
        options[j].style.justifyContent = "space-between";
        options[j].style.flexDirection = "column"
    
    }
    main.style.gridTemplateColumns = "0.5fr 0.5fr 0.5fr 0.5fr";
    main.style.width = "60%"
        };
        if (buttons[i].textContent.trim() === "cropping"){
            console.log("cropping");
        };
        if (buttons[i].textContent.trim() === "gallery screen"){
            console.log("gallery screen");
        };
        if (buttons[i].textContent.trim() === "two panels"){
            console.log("two panels");
        };
    }
    )};


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