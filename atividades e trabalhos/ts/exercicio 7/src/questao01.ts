class Vehicle {

    private plate: string;
    private year: number;

    constructor(plate: string, year: number) {
        this.plate = plate;
        this.year = year;
    }
}

class Car extends Vehicle {

    private model: string;
    
    constructor(plate: string, year: number, model: string) {
        super(plate, year);
        this.model = model;
    }
}

class ElectricCar extends Car {
    
    private batteryLife: number;

    constructor(plate: string, year: number, model: string, batteryLife: number) {
        super(plate, year, model);
        this.batteryLife = batteryLife;
    }
} 