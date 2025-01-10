class Vehicle {

    private plate: string;
    private year: number;
    private model: string;

    constructor(plate: string, year: number, model: string) {
        this.plate = plate;
        this.year = year;
        this.model = model;
    }
}

class Car extends Vehicle {
    
    constructor(plate: string, year: number, model: string) {
        super(plate, year, model);
    }
}

class ElectricCar extends Vehicle {
    
    private batteryLife: number;

    constructor(plate: string, year: number, model: string, batteryLife: number) {
        super(plate, year, model);
        this.batteryLife = batteryLife;
    }
} 