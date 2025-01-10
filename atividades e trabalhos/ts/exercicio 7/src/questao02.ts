export class Calculator {

    protected numberOne: number;
    protected numberTwo: number;

    constructor(numberOne: number, numberTwo: number) {
        this.numberOne = numberOne;
        this.numberTwo = numberTwo;
    }

    // method to sum values
    public sum() : number {
        return this.numberOne + this.numberTwo;
    }
}


function main() {

    const calc = new Calculator(5, 10);
    const sum = calc.sum();

    console.log("sum: ", sum);  
}

main();