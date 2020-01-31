/*var menu = document.querySelector("#menu");
var paragraf = document.querySelector("p");

menu.classList.add("menu");
paragraf.innerHTML = "A to jest paragraf w zadaniu 1";*/

/* W przypadku umieszczenia skryptu w nagłówku strony, 
skrypt zostanie wywołany kiedy nie nastąpiło jeszcze wczytanie DOM.
Natomiast umieszczenie skryptu na dole strony spowoduje 
jego uruchomienie po załadowaniu DOM.*/

document.addEventListener("DOMContentLoaded",function(){
    var menu = document.querySelector("#menu");
    var paragraf = document.querySelector("p");
    
    menu.classList.add("menu");
    paragraf.innerHTML = "A to jest paragraf w zadaniu 1";
});

/*Stworzenie eventu sprawiło, że kod jest wykonywany 
dopiero po załadowaniu strony. */

/*Po przeniesieniu skryptu na dół strony event uruchomi go tak samo. 
Dopiero po załadowaniu strony. Nie ma różnicy w wykonywaniu skryptu. */  
