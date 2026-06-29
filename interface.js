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
let images = document.querySelectorAll("img");
let menuNavigaton = document.getElementById("menu-navigaton");
//let buttons = footer.querySelectorAll("button"); 
let buttons = document.querySelectorAll("button"); 
let settingsOn = false;
menuNavigaton.style.display = "none";
header.style.height = "0"; 

let newValues = ["","list colums", "card icons", "cropping", "gallery screen", "two panels"];
let oldValues = ["reset selection","group description", "select description", "transfer media", "change srce/ dest", "display settings"];
const toSmall = window.matchMedia("max-width: 480px");
//console.log(window.innerWidth);
settingsOn = false;
displaySettings.addEventListener("click", function(){
    //log(buttons[0]);
    buttons[0].innerHTML = "<img src='arrow_icon.png'>"
    for (let i = 1; i <= newValues.length; i++) {
        log(buttons[i].textContent);
        buttons[i].textContent = newValues[i];
    }
    settingsOn = true;
});
//settingsOn = true;

if (settingsOn) {
    
log("in the event");

resetSelection.addEventListener("click", function(){
         let buttons = footer.querySelectorAll("button"); 
    for (let i = 0; i <= newValues.length-1; i++) {
        log(buttons[i].textContent);
        buttons[i].textContent = oldValues[i];
    }
});
//settingsOn = false;

groupDescription.addEventListener("click", function(){
    main.style = "";
        for (let i = 0; i <= options.length; i++) {  
            log(bottom[i]);      
       //bottom[i].style.display = "block";
        log(images[i]);
        images[i].style.width="130%";
        images[i].style.hieght="auto";
        options[i].style="";
        
        } 
});

selectDescription.addEventListener("click", function(){      
    for (let i = 0; i < options.length; i++) {
        bottom[i].style.display = "none";
        images[i].style.width = "70%";
        images[i].style.height = "130%";
        options[i].style.display = "flex";
        options[i].style.justifyContent = "space-between";
        options[i].style.flexDirection = "column"
        elements[i].style.alignItems = "flex-end";
        elements[i].style.marginTop = "auto";
    }
    main.style.gridTemplateColumns = "0.5fr 0.5fr 0.5fr 0.5fr";
    main.style.width = "60%"
});

changeSrceDest.addEventListener("click", function(){
    log("hello");
    //header.style.display = "block"; 
    /*
    border-bottom: 10px solid #a9d6fc; */
    log(header.style.height);
    header.style.height= "50vh";
    log(header.style.height);
    header.style.backgroundColor = "rgb(62,63,65)";
})

displaySettings.addEventListener("click", function(){
    log("hello");
    main.style=""

     main.style.gridTemplateColumns = "0.25fr 0.25fr"
     main.style.width="90%"
     //main.style.borderRight = "solid rgba(49, 87, 255, 1) 3px"
     //let line=document.createElement("div");
     //line.style.backgroundColor=" rgba(169, 185, 255, 1) "
     //main.append(line);
    
});
}
tabs[0].addEventListener("click", function(){
    log("hello");
     menuNavigaton.style.display = "block";
    tabs[0].style.bottom = "10vh";
});

tabs[1].addEventListener("click", function(){
    log("hello");
     menuNavigaton.style.display = "block";
    tabs[0].style.bottom = "10vh";
});
