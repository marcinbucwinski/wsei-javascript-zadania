
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
