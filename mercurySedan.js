//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass")

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mercury", "Sedan", "1965", "color", "mileage");
console.log(v.make)


//After you write the derived Car class, you should test it out.

//Note: You can code your derived Car class here or make a file named index.js and do it there.


//TO DO: Code the Car subclass here or in index.js file, i.e. class Car extends Vehicle ...

class Car extends Vehicle {
    constructor(make, model, year, color, mileage, maximumPassengers,
        passengers, numberOfWheels, maximumSpeed, fuel, scheduleService) {
        super(make, model, year, color, mileage)
        this.maximumPassengers = maximumPassengers; 
        this.passengers = passengers; 
        this.numberOfWheels = numberOfWheels; 
        this.maximumSpeed = maximumSpeed; 
        this.fuel = fuel; 
        this.scheduleService = scheduleService; 
    }

    loadPassenger(num) {

    }

    start() {
        if (this.fuel > 0) {
            return this.started = true; 
        }
    }

    start() {
        if (this.fuel > 0) {
            return this.started = true; 
        }
    }

}










//TO DO: Creating Instances and Testing Them

//You can use the same instance "v" of the Vehicle class above for the base class.





//Create at least two new instances of the Car class and test them here:
