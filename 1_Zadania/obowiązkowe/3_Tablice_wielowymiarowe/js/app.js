
var task1Array = [
    [2, 3],
    ["Ala", "Ola"],
    [true, false],
    [5, 6, 7, 8],
    [12, 15, 67]
];


var task2Array = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
];

//Zadanie 0
var arr = [
    [11, 12],
    [42, 2],
    [-4, -120],
    [0, 0],
    [1, 34],
    ];
function checkArray(array) {
    var newArray = [];
    for(var i = 0; i < array.length; i++) {
        var check = true;
        for(var j = 0; j < array[i].length; j++) {
            if(array[i][j] % 2 !== 0) {
                 check = false;
                break;
            }
        }
        newArray.push(check);
    }
    return newArray;
}   
console.log(checkArray(arr));

//Zadanie 1
console.log(task1Array[3][2]);
task1Array.forEach(elem => {console.log(elem.length);});
console.log(task1Array[4][2]);

//Zadanie 2



//Zadanie 3
var arr3 = [
    [11, 12],
    [42, 2],
    [-4, -120],
    [0, 2],
    [1, 34],
    ];
function print2DArray(array){
    for(var i=0; i<array.length; i++){
        for (var j=0; j<array[1].length; j++){
            console.log(array[i][j]);
        }
    }
};
console.log(print2DArray(arr3));

// Zadanie 4
var arr3 = [
    [-78, 25],
    [22, 26],
    [5, 80],
    [-63, 2],
    
    ];
function print2DArray(array){
    for(var i=0; i<array.length; i++){
        for (var j=0; j<array[1].length; j++){
            console.log(array[i][j]);
        }
    }
};
console.log(print2DArray(arr3));
