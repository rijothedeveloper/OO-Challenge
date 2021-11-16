describe("part one", function() {
    let myFirstVehicle;
    beforeEach(function() {
        myFirstVehicle = new Vehicle("Honda", "Monster Truck", 1999);
    })
    it("honk, which returns the string 'Beep.'", function() {
        expect(myFirstVehicle.honk()).toEqual("Beep");
    })

    it("toString, returns the string containing the make, model and year", function() {
        expect(myFirstVehicle.toString()).toEqual("The vehicle is a Honda Monster Truck from 1999");
    })

});

describe("part two", function() {
    let myFirstCar;
    beforeEach(function() {
        myFirstCar = new Car("Toyota", "Corolla", 2005);
    });

    it("honk, which returns the string 'Beep.'", function() {
        expect(myFirstCar.honk()).toEqual("Beep");
    })

    it("toString, returns the string containing the make, model and year", function() {
        expect(myFirstCar.toString()).toEqual("The vehicle is a Toyota Corolla from 2005");
    })

    it("car instance should have a property called numWheels which has a value of 4.", function() {
        expect(myFirstCar.numWheels).toEqual(4);
    })

});


describe("part three", function() {

    let myFirstMotorcycle;
    beforeEach(function() {
        myFirstMotorcycle = new Motorcycle("Honda", "Nighthawk", 2000);
    });

    it("honk, which returns the string 'Beep.'", function() {
        expect(myFirstMotorcycle.honk()).toEqual("Beep");
    });

    it("toString, returns the string containing the make, model and year", function() {
        expect(myFirstMotorcycle.toString()).toEqual("The vehicle is a Honda Nighthawk from 2000");
    });

    it("revEngine method which returns 'VROOM!!!'", function() {
        expect(myFirstMotorcycle.revEngine()).toEqual("VROOM!!!");
    });

    it("have a property called numWheels which has a value of 2", function() {
        expect(myFirstMotorcycle.numWheels).toEqual(2);
    });

});

describe(" part four", function() {
    let garage;
    beforeAll(function() {
        garage = new Garage(2);
    })

    it("should return vechicle array after adding vehicles", function() {
        expect(garage.vehicles.length).toEqual(0);
        garage.add(new Car("Hyundai", "Elantra", 2015));
        expect(garage.vehicles.length).toEqual(1);
        expect(garage.add("Taco")).toEqual("Only vehicles are allowed in here!");
        garage.add(new Motorcycle("Honda", "Nighthawk", 2000));
        expect(garage.vehicles.length).toEqual(2);
        garage.add(new Motorcycle("Honda", "Nighthawk", 2001));
        expect(garage.vehicles.length).toEqual(2);
    })

});