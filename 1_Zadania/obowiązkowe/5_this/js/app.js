// Zadanie 0
var car={
    brand:"volvo", 
    color:"silver",
    numberOfKilometers:0,
    printCarinfo:function(){
        console.log(this.brand,'', this.color,'', this.numberOfKilometers);
    },
    drive:function(a){
         this.numberOfKilometers+=a;
    }
    };

console.log(car.printCarinfo()); 
console.log(car.drive(20));
console.log(car.printCarinfo()); 

//Zadanie 3
var stairs={
    step:0,

    up:function(){
        this.step+=1
    },

    down:function(){
        this.step-=1
    },

    printStep:function(){
        console.log(this.step);
    }

};
stairs.up();
stairs.up();
stairs.up();
stairs.down(); 
stairs.printStep() 

