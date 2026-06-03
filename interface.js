

//Кнопка список /колонки должна иметь две функции. В зависимости от отображаемого на экране режима соответствующее слово должно выделяться ярким белым цветом.
//Вариант с двумя панелями должен иметь яркую черту посередине как показано на рисунке.


//
//
//
//



let log = console.log;

let resetSelection = document.getElementById("reset-selection");
let groupDescription = document.getElementById("group-description");
let selectDescription = document.getElementById("select-description");

let footer = document.querySelector("footer");
let tabs = document.getElementsByClassName("tabs");
let main = document.querySelector("main");
let header = document.querySelector("header");

let displaySettings = document.getElementById("display-settings"); 

let bottom = document.getElementsByClassName("bottom");
let options = document.getElementsByClassName("options");
 let elements = document.getElementsByClassName("lables");
 let images = document.querySelectorAll("img");

 let settingsOn = false;
 log(images);
footer.style.display = "none";
header.style.display = "none"; 

let newValues = ["","list colums", "card icons", "cropping", "gallery screen", "two panels"];
//let newValues = ["reset selection","group description", "select description", "transfer media", "change srce/ dest", "display settings"];

if (settingsOn) {
    


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
        for (let i = 0; i <= options.length; i++) {        
        /*options[i].innerHTML= '<div class="options"><img src="IMG_2353.jpeg" alt=""><span class="lables"><span class = "fileName">IMG_20260406s.jpg </span><span class = "bottom"><span>4:3</span> <a href="">1200:900 pixels 11,2 Mb</a><span>.jpg</span></span></span></div>';*/
        bottom[i].style.display = "block";
        } 
          /*main.style.gridTemplateColumns = "0.75fr 0.75fr 0.75fr 0.75fr";*/
          main.style.cssText = "";

});



selectDescription.addEventListener("click", function(){
   /*main.classList.value = "";
    main.classList.add("card_pannel");*/
      
    for (let i = 0; i < options.length; i++) {
        bottom[i].style.display = "none";
        //images[i].style.width = "80%";
        images[i].style.width = "70%";
        options[i].style.display = "flex";
        options[i].style.justifyContent = "space-between";
        options[i].style.flexDirection = "column"
        elements[i].style.alignItems = "flex-end";
        elements[i].style.marginTop = "auto";
    }
     //main.style.display = "grid";
    //main.style.gridTemplateColumns = "0.75fr 0.75fr 0.75fr 0.75fr";
    main.style.gridTemplateColumns = "0.5fr 0.5fr 0.5fr 0.5fr";
    //main.style.display = "flex";
    //main.style.justifyContent = "space-between";


});
/*let iconState = 0; 
icons.addEventListener("click", function(){
    let options = document.querySelectorAll(".options");
    iconState++;

    if (iconState === 1) {
     
        options.forEach(el => el.style.flexDirection = "column");
    } else if (iconState === 2) {

        main.classList.add("card_pannel"); 
        options.forEach(el => el.style.flexDirection = "row"); 
    } else {
       
        main.classList.remove("card_pannel");
        options.forEach(el => el.style.flexDirection = "row");
        iconState = 0;
    }
});


tabs.setAttribute('draggable', 'true');

tabs.addEventListener("dragstart", function(e) {
    footer.style.display = "flex"; 
    this.style.opacity = "0.5";
    e.dataTransfer.setData('text/plain', ''); 
});

tabs.addEventListener("dragend", function() {
    this.style.opacity = "0";
});

document.addEventListener("dragover", function(e) {
    e.preventDefault(); 
    const footerTop = footer.getBoundingClientRect().top;
    const tabsHeight = tabs.offsetHeight;
    let newTop = e.clientY;
    
    if (newTop + tabsHeight > footerTop) {
        newTop = footerTop - tabsHeight;
    }

    tabs.style.position = "fixed"; 
    tabs.style.top = newTop + "px";
});

*/

}
tabs[0].addEventListener("click", function(){
    log("hello");
    footer.style.display = "block";
    /*tabs.style.bottom = "7%";*/
    /*bottom.style.margin.left = "2vh";*/
});



tabs[1].addEventListener("click", function(){
    log("hello");
    footer.style.display = "block";
    //tabs.style.bottom = "7%";
    /*bottom.style.margin.left = "2vh";*/
});

displaySettings.addEventListener("click", function(){
    let buttons = footer.querySelectorAll("button"); 
    settingsOn = true
    for (let i = 0; i <= newValues.length-1; i++) {
        log(newValues[i]);
        log(buttons.textContent);
    }
});