document.addEventListener("DOMContentLoaded", function () {
    /*
    Poniżej napisz kod rozwiązujący zadania
     */
//Zadanie 0
var ex5 = document.querySelector(".ex5 ul").children;

for(var i=0; i<ex5.length; i++){
    if(i%2==0){
        ex5[i].style.backgroundColor = "green";
    }
    if(i==4){
        ex5[i].classList.add("big");
    }
    if(i%3==0){
        ex5[i].style.textDecoration = "underline";
    }
}

//Zadanie 1
var chromeElement = document.querySelector(".chrome");
var edgeElement = document.querySelector(".edge");
var firefoxElement = document.querySelector(".firefox");

chromeElement.style.backgroundImage = "url('assets/img/chrome.png')";
chromeElement.style.width = "100px";

edgeElement.style.backgroundImage = "url('assets/img/edge.png')";
firefoxElement.style.backgroundImage = "url('assets/img/firefox.png')";

var linkChrome = document.querySelector(".chrome + a");
var linkEdge = document.querySelector(".edge + a");
var linkFirefox = document.querySelector(".firefox + a");

linkChrome.innerHTML = "Chrome";
linkFirefox.innerHTML = "Firefox";

linkChrome.setAttribute("href", "https://www.google.com/intl/pl_pl/chrome/");
linkEdge.setAttribute("href", "https://www.microsoft.com/pl-pl/windows/microsoft-edge");
linkFirefox.setAttribute("href","https://www.mozilla.org/pl/firefox/new/");

//Zadanie 2
var imie = document.querySelector(".ex2 #name");
var kolor = document.querySelector(".ex2 #fav_color");
var potrawa = document.querySelector(".ex2 #fav_meal");

imie.innerHTML = "Marcin Bućwiński";
kolor.innerHTML = "Niebieski";
potrawa.innerHTML = "Grilowany łosoś";

//Zadanie 3
var ulElement = document.querySelector(".ex3 ul");
ulElement.classList.add("menu");

var liElement = document.querySelectorAll(".ex3 li");

for(var element of liElement){
    if(element.classList.contains("error")){
        element.classList.remove("error");
    }
    if(!element.classList.contains("menuElement")){
        element.classList.add("menuElement");
    }
}

//Zadanie 4
var liElementZ4 = document.querySelectorAll(".ex4 li");
for(var i=0; i<liElementZ4.length;i++){
    liElementZ4[i].dataset.id=i+1;
}

});
