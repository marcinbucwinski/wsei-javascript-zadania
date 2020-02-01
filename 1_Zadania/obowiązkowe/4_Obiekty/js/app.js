//Zadanie 0a
var city={};
city.capital="Warszawa";
city.population="1.5mln";
city.president="ktos";
city.primeMinisters="ktos1, kros2, ktos3";
console.log(city.capital);
console.log(city.population);
console.log(city.president);
console.log(city.primeMinisters);

//Zadanie 0b
const timeMachine = {
    shape:'kwadrat',
    model:'auto',
    run: (date, place) => {
        console.log(`Jest: ${date}. Miejsce: ${place}`);
    }
};
console.log(`shape: ${timeMachine.shape}`);
console.log(`model: ${timeMachine.model}`);
timeMachine.run('02.03.1987', 'Krakow');

//Zadanie 1
var book={title:"cos",author:"ktos",numberOfPages:3};
console.log(book);

//Zadanie 2
var person={name:"John",age:"50", sayHello: function(){console.log("hello")}};
console.log(person.name);
console.log(person.age);
console.log(person.sayHello());

//Zadanie 3
var ulubionyPrzepis={title:"abc", servings:"25" };
ulubionyPrzepis.ingredients="abd, afg, ard";
console.log(ulubionyPrzepis.title);
console.log(ulubionyPrzepis.servings);
console.log(ulubionyPrzepis.ingredients);

//Zadanie 6
var spoon = {
    isExist: true
}
var fork = spoon;
fork.isExist  = false;
console.log(spoon.isExist);
