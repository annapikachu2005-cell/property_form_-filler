let log = console.log;

// Элементы
let arrow = document.getElementById("arrow");
let list = document.getElementById("list");
let icons = document.getElementById("icons");
let pannels = document.getElementById("pannels");
let footer = document.querySelector("footer");
let tabs = document.getElementById("tabs");
let main = document.querySelector("main");
let header = document.querySelector("header");
let galleryScreen = document.getElementById("gallery_screen"); // Исправлено на getElementById

// Начальное состояние
footer.style.display = "none";
header.style.display = "none"; // Скрываем хедер на старте

let newValues = ["reset selection","group description", "select description", "transfer media", "change srce/ dest", "display settings"];

// --- Логика Gallery Screen ---
galleryScreen.addEventListener("click", function() {
    if (this.textContent.trim() === "gallery screen") {
        // Переключаем видимость: если none - ставим block, если block - none
        header.style.display = (header.style.display === "none") ? "block" : "none";
    }
});

// --- Логика Кнопок Панелей ---
pannels.addEventListener("click", function(){
    main.classList.add("double-pannel");
    main.classList.remove("card_pannel");
});

list.addEventListener("click", function(){
    main.classList.remove("double-pannel", "card_pannel");
});

// --- Логика Icons (3 состояния) ---
let iconState = 0; 
icons.addEventListener("click", function(){
    let options = document.querySelectorAll(".options");
    iconState++;

    if (iconState === 1) {
        // Текст под картинкой в линию
        options.forEach(el => el.style.flexDirection = "column");
    } else if (iconState === 2) {
        // Два ряда (сетка)
        main.classList.add("card_pannel"); 
        options.forEach(el => el.style.flexDirection = "row"); // сброс флекса для работы грида
    } else {
        // Сброс в исходное
        main.classList.remove("card_pannel");
        options.forEach(el => el.style.flexDirection = "row");
        iconState = 0;
    }
});

// --- Drag and Drop Табов ---
tabs.setAttribute('draggable', 'true');

tabs.addEventListener("dragstart", function(e) {
    footer.style.display = "flex"; 
    this.style.opacity = "0.5";
    e.dataTransfer.setData('text/plain', ''); 
});

tabs.addEventListener("dragend", function() {
    this.style.opacity = "1";
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

// --- Логика Arrow (Замена текста) ---
arrow.addEventListener("click", function(){
    let elements = footer.querySelectorAll("button"); 
    for (let i = 0; i < elements.length; i++) {
        if (newValues[i]) elements[i].textContent = newValues[i];
    }
});
