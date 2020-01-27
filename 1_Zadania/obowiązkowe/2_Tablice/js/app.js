//Zadanie 1
var owoce=["jablko","sliwka","gruszka","poziomka"];
console.log(owoce[0]);
var a=owoce.length-1;
console.log(owoce[a]);
for(var i=0; i<owoce.length; i++){
    console.log(owoce[i]);
};

//Zadanie 3
var array3=[1,2,3,4,5]
function printTable(array){
    for(var i=0; i<array.length; i++){
        console.log(array[i]);
    };
};
console.log(printTable(array3));

//Zadanie 4
var array1=[1,2,3,4,5,6,7];
function multiply(array1) {
    var temp=1;
    for (let i=0; i<array1.length; i++){
    temp*=array1[i];
    };
console.log(temp)};
console.log(multiply(array1));

//Zadanie 5
array=[1,2,3,4,5,6];
function getEventAvarage(array) {
    let arg=0
    let eventNumber=0

    array.forEach(element=>{

    if (element%2==0){
    arg+=element
    eventNumber++}
    })

    if(arg==0){
    console.log(null)
    }else{
    console.log(arg/eventNumber)
}};
console.log(getEventAvarage(array));

//Zadanie 6
array2=[145,11,3,64,4,6,10];
function sortArray(array){
    const t= array.sort(function(a, b){return a - b});
    console.log(t);
};
console.log(sortArray(array2));
