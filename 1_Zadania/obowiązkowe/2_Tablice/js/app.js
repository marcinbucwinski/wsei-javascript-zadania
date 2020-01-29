//Zadanie 0
array0=[1,2,3,4,5,6,7];
function distFromAvarage(array){
    var tmp=0;
    for(var i=0; i<array.length; i++){
        tmp+=array[i];
    };
    var avg=tmp/array.length;
    var newarray=[];
    for(var i=0; i<array.length; i++){
        newarray[i]=array[i]-avg;
    };
    console.log(newarray);
};
console.log(distFromAvarage(array0));

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

//Zadanie 7

function addArrays(array1, array2) {
    var arrayLength = array1.length > array2.length ? array1.length : array2.length;
    var newArray = [];
    for(var i = 0; i < arrayLength; i++) {
        if(typeof(array1[i]) === 'undefined') {
            newArray.push(array2[i]);
        }else if(typeof(array2[i]) === 'undefined') {
            newArray.push(array1[i]);
        }else {
            newArray.push(array1[i] + array2[i]);
        }
        
    }
    console.log(newArray);
    return newArray;
}

addArrays([4,0,1,3,4],[1,9,6,7,8,17]);
addArrays([8,3,22],[1,3,2]);
addArrays([2,3,1,5,3,5],[3,1,76,1]);
