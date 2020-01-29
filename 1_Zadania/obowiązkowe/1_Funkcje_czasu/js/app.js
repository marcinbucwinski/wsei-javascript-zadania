function countHello(numer) {
    var licznik = 1;
    var interwal = setInterval(() => {
        if(licznik === numer) {
            clearInterval(interwal);
        }
        console.log('Hello ', licznik);
        licznik++;
    }, 100)
}

console.log(countHello(10));
