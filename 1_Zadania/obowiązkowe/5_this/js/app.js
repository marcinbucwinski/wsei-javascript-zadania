// Zadanie 0
var car={
    brand:"volvo", 
    color:"silver",
    numberOfKilometers:0,
    printCarinfo:function(){
        console.log(this.brand,'', this.color,'', this.numberOfKilometers);
    },
    drive:function(kilometers){
         this.numberOfKilometers+=kilometers;
    }
    };

console.log(car.printCarinfo()); 
console.log(car.drive(20));
console.log(car.printCarinfo()); 

//Zadanie 1
pokazDatyPrzegladow:function(){
        console.log(this.datyPrzegladow);
    },
    dodajDatePrzegladu:function(data){
        this.datyPrzegladow.push(data);
    }
    };

car1.datyPrzegladow=["12.10.2016","15.10.2017","14.10.2018"]; 
console.log(car1.pokazDatyPrzegladow())
console.log(car1.dodajDatePrzegladu("14.01.2019"));
console.log(car1.pokazDatyPrzegladow())

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

