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
menuNavigaton.style.display = "none";
header.hidden = true; 

let newValues = ["","list colums", "card icons", "cropping", "gallery screen", "two panels"];
let oldValues = ["reset selection","group description", "select description", "transfer media", "change srce/ dest", "display settings"];

displaySettings.addEventListener("click", function(){
    let images = document.querySelectorAll("img");
    for (let i = 0; i <= newValues.length - 1; i++) {
        buttons[i].textContent = newValues[i];
    }
})

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function(){
        if (buttons[i].textContent.trim() === "list colums"){         
            console.log("list");
            main.style.display = "grid";
             for (let n = 0; n < options.length; n++) {
             bottom[n].hidden = false;
            images[n].style.height = "80%";
            options[n].style.display = "grid";
             options[n].style.gridTemplateColumns = "4rem 15rem";
            }
            main.style.gridTemplateColumns = "0.5fr" ;
        };
        if (buttons[i].textContent.trim() === "card icons"){
            console.log("card icons");
                for (let j = 0; j < options.length; j++) {             
                    bottom[j].hidden = true;
                    images[j].style.height = "130%";
                    options[j].style.display = "flex";
                    options[j].style.justifyContent = "space-between";
                    options[j].style.flexDirection = "column";        
                }
    main.style.gridTemplateColumns = "0.5fr 0.5fr 0.5fr 0.5fr";
    main.style.width = "60%"
        };
        if (buttons[i].textContent.trim() === "cropping"){
            console.log("cropping");
        };
        if (buttons[i].textContent.trim() === "gallery screen"){
            console.log("gallery screen");
            header.hidden = false; 
        };
        if (buttons[i].textContent.trim() === "two panels"){
            console.log("two panels");
           main.style.gridTemplateColumns = "0.5fr 0.5fr";
           main.style.borderRight = "4px solid rgb(64, 64, 255)"
        };
    }
    )};

tabs[0].addEventListener("click", function(){
    console.log("hello");
    header.hidden = false; 
    tabs[0].style.bottom = "10vh";
});

tabs[1].addEventListener("click", function(){
    log("hello");
     menuNavigaton.style.display = "block";
     menuNavigaton.hidden = false;
    tabs[0].style.bottom = "10vh";
});