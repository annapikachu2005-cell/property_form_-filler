let log = console.log;

let displaySettings = document.getElementById("display-settings"); 
let footer = document.querySelector("footer");
let tabs = document.getElementsByClassName("tabs");
let main = document.querySelector("ul");
let bottom = document.getElementsByClassName("bottom");
let menuNavigaton = document.getElementById("menu-navigaton");
let buttons = document.querySelectorAll("button"); 
let currentButton = "";

let newValues = ["","list colums", "card icons", "cropping", "gallery screen", "two pannels"];
let oldValues = ["reset selection","group description", "select description", "transfer media", "change srce/ dest", "display settings"];

let pannelsOn, cardInfo = false;

function changeMode(mode){
    mode=mode.replace(' ', '-')
    if (mode == "two-panels" && mode == "gallery-screen") {
        log("add the class");
        mian.classList = mian.classList[0] + " " + mode
    } else if (mode == "list-colums"){
        main.classList=""
    }
    else{
        main.classList=mode;
    }

    if("card-icons" in main.classList){
            log("double-icons");
            main.classList="double-icons"
    }
};

displaySettings.addEventListener("click", function(){
    for (let i = 0; i <= newValues.length - 1; i++) {
        buttons[i].textContent = newValues[i];   
    }

for (let i = 0; i < buttons.length; i++) { 
    log(buttons[i].textContent);
        currentButton = buttons[i]
    currentButton.addEventListener("click", function(){
        changeMode(newValues[i]);
    });
};
})


