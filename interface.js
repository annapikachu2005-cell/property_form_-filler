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
let buttons = footer.querySelectorAll("button"); 
//let buttons = document.querySelectorAll("button"); 
let settingsOn = false;
menuNavigaton.style.display = "none";
header.style.height = "0"; 
log(buttons);
log(buttons[0].textContent);
let newValues = ["","list colums", "card icons", "cropping", "gallery screen", "two panels"];
let oldValues = ["reset selection","group description", "select description", "transfer media", "change srce/ dest", "display settings"];
//const toSmall = window.matchMedia("max-width: 480px");
//console.log(window.innerWidth);

displaySettings.addEventListener("click", function(){
    let images = document.querySelectorAll("img");
    //log(buttons[0]);
   // buttons[0].innerHTML = "<img src='arrow_icon.png'>"
    for (let i = 0; i <= newValues.length - 1; i++) {
        //log(buttons[i].textContent);
        buttons[i].textContent = newValues[i];
    }

    resetSelection.addEventListener("click", function(){
        let buttons = footer.querySelectorAll("button"); 
        for (let i = 0; i <= newValues.length-1; i++) {
            //log(buttons[i].textContent);
            buttons[i].textContent = oldValues[i];
        }
}
);
});


    log("In in the event")
    groupDescription.addEventListener("click", function(){
    log("groupDescription");
    main.style = "";

        for (let i = 0; i <= options.length; i++) {  
            log(bottom[i]);      
       //bottom[i].style.display = "block";
        log(images[i]);
        images[i].style.width="130%";
        images[i].style.hieght="auto";
        options[i].style="";    
        } 


changeSrceDest.addEventListener("click", function(){
    log("hello");
    if (buttons[4] == ''){
        log("in the event");
    };
    //header.style.display = "block"; 
    /*
    border-bottom: 10px solid #a9d6fc; */
    log(header.style.height);
    header.style.height= "50vh";
    log(header.style.height);
    header.style.backgroundColor = "rgb(62,63,65)";
})
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
    main.style.width = "60%"})

    })


    //settingsOn = true;
   
 buttons[0].innerHTML = "<img src='arrow_icon.png'>"
 //settingsOn = !settingsOn

//settingsOn = true;

//log(buttons[1].textContent);

 //log(settingsOn);
/*if (buttons[1].textContent == "list") {
log("in the event");
//settingsOn = false;
}else{
    log("fail");
}*/

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
