
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
        };
        if (buttons[i].textContent.trim() === "list colums"){    
            twoColumns = !twoColumns;     
            main.style.display = "grid";
             for (let n = 0; n < main.children.length; n++) {
             bottom[n].hidden = true;
             main.children[n].style.display = "grid";
             main.children.style.gridTemplateColumns = "3.6rem 15rem";
            main.children[n].children[0].style = "90%";
            }
            if(twoColumns){
            main.style.gridTemplateColumns = "0.35fr 0.35fr" ;
        }else{main.style.gridTemplateColumns = "0.35fr" ;}
        };
        if (buttons[i].textContent.trim() === "card icons"){
             cardInfo = !cardInfo; 
            for (let j = 0; j < main.childrenh; j++) {             
                    bottom[j].hidden = true;
                    main.children[j].style.display = "flex";
                    main.children[j].style.justifyContent = "space-between";
                    main.children[j].style.flexDirection = "column";      
                    main.children[j].children[0].style = "130%";                   
                }
            if(cardInfo){
                for (let j = 0; j <main.children .length; j++) {             
                    bottom[j].hidden = true;                  
                }}else{
                for (let j = 0; j < main.children.length; j++) {             
                    bottom[j].hidden = false;                      
                }
            main.style.gridTemplateColumns = "0.35fr 0.35fr" ;
            }

    main.style.gridTemplateColumns = "0.42fr 0.42fr 0.42fr 0.42fr";

        };
        if (buttons[i].textContent.trim() === "cropping"){
            console.log("cropping");
        };
        if (buttons[i].textContent.trim() === "gallery screen"){
            console.log("gallery screen");
            header.hidden = false; 
        };
        if (buttons[i].textContent.trim() === "two panels"){
           main.style.gridTemplateColumns = "0.45fr 0.45fr";
           main.style.borderRight = "6px solid rgb(73, 73, 255)";
 
        };
    }
    )};

for (let i= 0; i < tabs.length; i++) {
    menuNavigaton.hidden = false;
    tabs[0].style.bottom = "10vh";    
}