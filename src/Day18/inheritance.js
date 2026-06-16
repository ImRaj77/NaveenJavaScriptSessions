
// Inheritance : Child class is able to access the Parent class properties
// but, Parent can't access anything from the Child

// SuperClass - Parent 
class Car {

    speed = 100;

    start(){
        console.log('Car starts');
    }

    stop(){
        console.log('Car stops');
    }

    refuel(){
        console.log('Refueling');
    }
}

// Child class
class BMW extends Car {
    speed = 200;

    parking() {
        console.log('BMW Parking');
    }

    // Method overriding
    start(){
        console.log('BMW - starts');
    }

    #billing() {
        console.log('BMW Billing');
    }

    accessBilling() {
        this.#billing();
    }
}

let bmw = new BMW();
console.log(bmw.speed);
bmw.start();                // Overriden
bmw.stop();                 // inherited
bmw.refuel();               // inherited
bmw.parking();              // own method
// bmw.#billing();          // not allowed
bmw.accessBilling();

console.log('------');

let bmw1 = new Car();
console.log(bmw1.speed);
bmw1.start();
bmw1.stop();
bmw1.refuel();              
//bmw1.parking();             // Not allowed


// super keyword works only for Parent class methods not with the Parent class variables
class Car {
    speed = 100;

    start(){
        console.log('car -- start');
        console.log(this.speed);            // 100
    }
}

class BMW1 extends Car {
    speed = 200;
    
    start(){
        console.log('BMW -- start');
        console.log(this.speed);            // 200
    }

    dashboard(){
        this.start();
        super.start();
        //console.log(super.speed);               // undefined
    }
}

let bm = new BMW1(200);
bm.dashboard();