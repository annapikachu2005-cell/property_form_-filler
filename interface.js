

 /* 
Кнопка список /колонки должна иметь две функции. В зависимости от отображаемого на экране режима соответствующее слово должно выделяться ярким белым цветом.
Вариант с двумя панелями должен иметь яркую черту посередине как показано на рисунке.
Дополнительные информация в списке должна постоянно отображаться при активации варианта просмотра список.
Информация в карточках должна быть аккуратно организована и корректно отображаться независимо от размера экрана.
Необходимо доделать крупные кнопки с названием папок.
Кнопки с названием папок должны иметь разные цвета в зависимости от их активности или неактивности.
Необходимо как можно ближе имитировать вид кнопок с названием папок.
Кнопки с названием папок имеют три разных состояния в зависимости от выбранного режима просмотра.
*/

//const { createElement } = require("react");



let log = console.log;

let resetSelection = document.getElementById("reset-selection");
let groupDescription = document.getElementById("group-description");
let selectDescription = document.getElementById("select-description");

let displaySettings = document.getElementById("display-settings"); 

let changeSrceDest = document.getElementById("changeSrceDest"); 



log(changeSrceDest);
let footer = document.querySelector("footer");
let tabs = document.getElementsByClassName("tabs");
let main = document.querySelector("main");
let header = document.querySelector("header");

let bottom = document.getElementsByClassName("bottom");
let options = document.getElementsByClassName("options");
let elements = document.getElementsByClassName("lables");
let images = document.querySelectorAll("img");

let menuNavigaton = document.getElementById("menu-navigaton");

let settingsOn = false;
log(images);
menuNavigaton.style.display = "none";
header.style.display = "none"; 

let newValues = ["","list colums", "card icons", "cropping", "gallery screen", "two panels"];
let oldValues = ["reset selection","group description", "select description", "transfer media", "change srce/ dest", "display settings"];
const toSmall = window.matchMedia("max-width: 480px");
console.log(window.innerWidth);
log(toSmall);
displaySettings.addEventListener("click", function(){
    let buttons = footer.querySelectorAll("button"); 
    //settingsOn = true
    log(buttons[0]);
    buttons[0].innerHTML = "<img src='arrow.svg'>"
    for (let i = 1; i <= newValues.length-1; i++) {
        //log(newValues[i]);
        //log(buttons.textContent);
        log(buttons[i].textContent);
        buttons[i].textContent = newValues[i];
    }
    
});
settingsOn = true;
log(settingsOn);

if (settingsOn) {
    
log("in the event");


resetSelection.addEventListener("click", function(){
         let buttons = footer.querySelectorAll("button"); 
    //settingsOn = true
    for (let i = 0; i <= newValues.length-1; i++) {
        //log(newValues[i]);
        //log(buttons.textContent);
        log(buttons[i].textContent);
        buttons[i].textContent = oldValues[i];
    }
    
});
settingsOn = false;
/*displaySettings.addEventListener("click", function(){
    header.style.display = "block"; 
    main.classList.value = "";
    main.classList.add("double-pannel");

    for (let i = 0; i <= options.length; i++) {      
        bottom[i].style.display = "none"; 
    }
});*/

groupDescription.addEventListener("click", function(){
    /*main.classList.value = "";*/
    main.style = "";
        for (let i = 0; i <= options.length; i++) {        
        /*options[i].innerHTML= '<div class="options"><img src="IMG_2353.jpeg" alt=""><span class="lables"><span class = "fileName">IMG_20260406s.jpg </span><span class = "bottom"><span>4:3</span> <a href="">1200:900 pixels 11,2 Mb</a><span>.jpg</span></span></span></div>';*/
       bottom[i].style.display = "block";
        log(images[i]);
        //images[i].style.height="5.5vh"
        images[i].style.width="130%";
        images[i].style.hieght="auto";
        options[i].style="";
        //options[i].style.gridTemplateColumns = "3rem 20rem";
        } 
          /*main.style.gridTemplateColumns = "0.75fr 0.75fr 0.75fr 0.75fr";*/
          //main.style.cssText = "";
          
          //options[i].style.display = "grid";
          //main.style.gridTemplateColumns = "3rem 20rem";
          


});



selectDescription.addEventListener("click", function(){
   /*main.classList.value = "";
    main.classList.add("card_pannel");*/
      
    for (let i = 0; i < options.length; i++) {
        bottom[i].style.display = "none";
        //images[i].style.width = "80%";
        images[i].style.width = "70%";
        images[i].style.height = "130%";
        options[i].style.display = "flex";
        options[i].style.justifyContent = "space-between";
        options[i].style.flexDirection = "column"
        elements[i].style.alignItems = "flex-end";
        elements[i].style.marginTop = "auto";
    }
     //main.style.display = "grid";
    //main.style.gridTemplateColumns = "0.75fr 0.75fr 0.75fr 0.75fr";
    main.style.gridTemplateColumns = "0.5fr 0.5fr 0.5fr 0.5fr";
    main.style.width = "60%"
    //main.style.display = "flex";
    //main.style.justifyContent = "space-between";


});

changeSrceDest.addEventListener("click", function(){
    log("hello");
    header.style.display = "block"; 
    /*    height: 50vh;
    background-color: rgb(62,63,65);
    border-bottom: 10px solid #a9d6fc; */
    header.style.hieght = "50vh";
    header.style.backgroundColor = "rgb(62,63,65)";
})

displaySettings.addEventListener("click", function(){
    log("hello");
    main.style=""

     main.style.gridTemplateColumns = "0.25fr 0.25fr"
     main.style.width="90%"
     //main.style.borderRight = "solid rgba(49, 87, 255, 1) 3px"
     let line=document.createElement("div");
     line.style.backgroundColor=" rgba(169, 185, 255, 1) "
     main.append(line);
    
});

}
tabs[0].addEventListener("click", function(){
    log("hello");
     menuNavigaton.style.display = "block";
    /*tabs.style.bottom = "7%";*/
    /*bottom.style.margin.left = "2vh";*/
    tabs[0].style.bottom = "10vh";
});



tabs[1].addEventListener("click", function(){
    log("hello");
     menuNavigaton.style.display = "block";
    //tabs.style.bottom = "7%";
    /*bottom.style.margin.left = "2vh";*/
    tabs[0].style.bottom = "10vh";
});


