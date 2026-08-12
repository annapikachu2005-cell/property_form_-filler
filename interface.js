let log = console.log;

let displaySettings = document.getElementById("display-settings"); 

let footer = document.querySelector("footer");
let tabs = document.getElementsByClassName("tabs");
let main = document.querySelector("main");
let header = document.querySelector("header");

let bottom = document.getElementsByClassName("bottom");
let menuNavigaton = document.getElementById("menu-navigaton");
let buttons = document.querySelectorAll("button"); 

menuNavigaton.hidden, header.hidden = true;
let newValues = ["","list colums", "card icons", "cropping", "gallery screen", "two panels"];
let oldValues = ["reset selection","group description", "select description", "transfer media", "change srce/ dest", "display settings"];

let pannelsOn, cardInfo, twoColumns = false;
displaySettings.addEventListener("click", function(){
    for (let i = 0; i <= newValues.length - 1; i++) {
        buttons[i].textContent = newValues[i];
    }
})

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function(){
        if (buttons[i].textContent.trim() === ""){  
                for (let i = 0; i <= newValues.length - 1; i++) {
        buttons[i].textContent = oldValues[i];
    }
        } else if (buttons[i].textContent.trim() === "list colums"){   
             main.classList = ""
            twoColumns = !twoColumns;     
             for (let n = 0; n < main.children.length; n++) {
             bottom[n].hidden = true;
            }
            if(twoColumns){
            main.style.gridTemplateColumns = "0.35fr 0.35fr" ;
        }else{main.style.gridTemplateColumns = "0.35fr" ;}
        };
        if (buttons[i].textContent.trim() === "card icons"){
            main.classList = "card_pannel"
             cardInfo = !cardInfo; 
        
            if(cardInfo){
                for (let j = 0; j <main.children .length; j++) {             
                    bottom[j].hidden = true;                  
                }}else{
                for (let j = 0; j < main.children.length; j++) {             
                    bottom[j].hidden = false;                      
                }
            }
        };
        if (buttons[i].textContent.trim() === "cropping"){
            console.log("cropping");
        };
        if (buttons[i].textContent.trim() === "gallery screen"){
            header.hidden = false; 
        };
        if (buttons[i].textContent.trim() === "two panels"){
 main.classList = "double-pannel";
        };
    }
    )};

for (let i= 0; i < tabs.length; i++) {
    menuNavigaton.hidden = false;
    tabs[0].style.bottom = "10vh";    
}