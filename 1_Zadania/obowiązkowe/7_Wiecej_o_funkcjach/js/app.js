/**
 * Zagniezdzanie funkcji.
 * Przesledz krok po kroku kazda linijke kodu. Kazda!
 * Napisz komentarze dla kazdej z linijek kodu
 */


//Utworzenie funkcji o nazwie "jeden"
function jeden() {

    //Deklaracja zmiennej i przypisanie wartości
    var zmienna1 = 1;

    //Utworzenie funkcji o nazwie "dwa"
    function dwa() {

        //Wyświetlenie w konsoli zmiennej "zmienna1"
        console.log(zmienna1);

        //Deklaracja zmiennej i przypisanie wartości
        var zmienna2 = 3;
    }

    //Wywołanie funkcji "dwa"
    dwa();

    
    //Pojawienie sie komunikatu "zmienna2 is not defined" ponieważ zmienna2 nie jest widoczna na zewnątrz funkcji dwa()
    console.log(zmienna2)
}

//Wywołanie funkcji jeden(), która wywołuje funkcję dwa()
jeden()
