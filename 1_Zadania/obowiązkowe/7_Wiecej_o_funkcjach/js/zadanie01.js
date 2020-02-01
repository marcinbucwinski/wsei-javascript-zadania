
/**
 * Zagniezdzanie funkcji.
 * Przesledz krok po kroku kazda linijke kodu. Kazda!
 * Napisz komentarze dla kazdej z linijek kodu
 */

//Utworzenie funkcji "sortArray()"
function sortArray() {

    //Utworzenie zmiennej tablicowej i przypisanie wartości do tablicy
    var points = [41, 3, 6, 1, 114, 54, 64];

    //Sortowanie elementów tablicy
    points.sort(function (a, b) {
        //Wynikiem sortowania będzie tablica z posortowanymi elementami rosnąco
        return a - b;
    });

    //Zwraca posortowaną tablicę
    return points;
}

//Wywołanie funkcji sortArray() 
sortArray();
