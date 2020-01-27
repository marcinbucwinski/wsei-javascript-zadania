
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

//Zadanie 4
var movie = {
    director: "Peter Jackson",
    writers: [" J.R.R. Tolkien ", "Fran Walsh", "Philippa Boyens", "Peter Jackson"],
    stars: ["Elijah Wood", "Ian McKellen", "Orlando Bloom"],
    country: "New Zealand | USA",
    budget: "$93,000,000",
    imdbPoints: 8.8,
    year: 2001,
    time: "2h 58 min",
    category: " Adventure, Drama, Fantasy"
};

for (x in movie){
    console.log(movie[x])
};




//Zadanie 6
var spoon = {
    isExist: true
}
var fork = spoon;
fork.isExist  = false;
console.log(spoon.isExist);
