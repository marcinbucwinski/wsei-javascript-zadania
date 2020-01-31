let elementFirst = document.getElementsByClassName("first")[0].children[0].children[2];
let elementSecond = document.getElementById("second").parentElement.children[3];
let familyElement = document.querySelector("[data-ex=third]").parentElement.parentElement.lastElementChild.firstElementChild;
let elementEx = familyElement.children[Math.floor(familyElement.children.length/2)];
let elementForth = document.getElementsByClassName("forth")[0].parentElement.getElementsByTagName("article")[0].getElementsByTagName("p")[1];

console.log(elementFirst);
console.log(elementSecond);
console.log(elementEx);
console.log(elementForth);
