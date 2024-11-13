class Teacher {

    name : string;
    timePayment : number;
    favoriteLanguage : string;

    constructor(name : string, timePayment : number, favoriteLanguage : string){
        this.name = name;
        this.timePayment = timePayment;
        this.favoriteLanguage = favoriteLanguage;
    }

    toString() : string {
        return this.name + "\nMy payment time is " + this.timePayment.toFixed(2) + "\nand\nmy favorite language is " + this.favoriteLanguage;
    }

}

function main() : void {

    const teacher : Teacher = new Teacher("Ely", 120.56, "TypeScript");

    console.log(teacher.toString());
}