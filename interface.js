//Необходимо разместить по центру весь дизайн.

//Текст внутри кнопок должен оставаться на своем месте и не заезжать за пределы экрана или кнопок. При любом размере экрана пользователь должен иметь возможность нажать на кнопку без каких-либо препятствий.
//Кнопка список /колонки должна иметь две функции. В зависимости от отображаемого на экране режима соответствующее слово должно выделяться ярким белым цветом.
//Вариант с двумя панелями должен иметь яркую черту посередине как показано на рисунке.
//Дополнительные информация в списке должна постоянно отображаться при активации варианта просмотра список.

//Размер текста должен подстраиваться под размер экрана.
//
//
//
//



let log = console.log;

let arrow = document.getElementById("arrow");
let list = document.getElementById("list");
let icons = document.getElementById("icons");
let displaySettings = document.getElementById("arrow");
let footer = document.querySelector("footer");
let tabs = document.getElementById("tabs");
let main = document.querySelector("main");
let header = document.querySelector("header");
let galleryScreen = document.getElementById("gallery_screen"); 
let bottom = document.getElementsByClassName("bottom");
let options = document.getElementsByClassName("options");

footer.style.display = "none";
header.style.display = "none"; 

let newValues = ["","list colums", "card icons", "cropping", "gallery screen", "two panels"];
//let newValues = ["reset selection","group description", "select description", "transfer media", "change srce/ dest", "display settings"];

galleryScreen.addEventListener("click", function() {
   header.style.display = "block"; 

});

displaySettings.addEventListener("click", function(){
    main.classList.add("double-pannel");
    main.classList.remove("card_pannel");
    for (let i = 0; i < options.length; i++) {      
        bottom[i].style.display = "none"; 
    }
});

list.addEventListener("click", function(){
    log("hello");
    main.classList.remove("double-pannel", "card_pannel");
        for (let i = 0; i < options.length; i++) {        
        options[i].innerHTML= '<div class="options"><img src="IMG_2353.jpeg" alt=""><span class="lables"><span class = "fileName">IMG_20260406s.jpg </span><span class = "bottom"><span>4:3</span> <a href="">1200:900 pixels 11,2 Mb</a><span>.jpg</span></span></span></div>';
        }
});

tabs.addEventListener("click", function(){
    log("hello");
    footer.style.display = "block";
    tabs.style.bottom = "7%";
    /*bottom.style.margin.left = "2vh";*/
});

icons.addEventListener("click", function(){
    main.classList.remove("double-pannel");
    main.classList.add("card_pannel");
    for (let i = 0; i < options.length; i++) {      
        options[i].innerHTML = ' <img src="IMG_2353.jpeg" alt=""> <span class="lables"><span class = "fileName">IMG_20260406s.jpg </span></span>'; 
        }

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
arrow.addEventListener("click", function(){
    let elements = footer.querySelectorAll("button"); 
    for (let i = 0; i < elements.length; i++) {
        if (newValues[i]) elements[i].textContent = newValues[i];
    }
});
