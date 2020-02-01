czesc(); //hoisting
function czesc() {
    console.log("Cześć");
}
czesc();

witaj(); 

//hoisting działa tylko dla deklaracji zmiennej dlatego został wywołaty type error. 
//Nie nastąpiło przypisanie definicji funkcji zanim została wywołana zmienna.

var witaj = function() {
    console.log("Witaj");
}
witaj();
