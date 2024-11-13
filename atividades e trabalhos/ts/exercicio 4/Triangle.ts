
class Triangle {

    l1 : number;
    l2 : number;
    l3 : number;

    constructor (l1 : number, l2 : number, l3 : number){
        this.l1 = l1;
        this.l2 = l2;
        this.l3 = l3;
    }

    isTriangle() : boolean {
        
        // |b-c| < a < b+c;
        return (this.l1 > (this.l2 - this.l3)) && (this.l1 < (this.l2 + this.l3));
    }

    isIsosceles() : boolean {
        
        if (!this.isTriangle()) return false;

        return (this.l1 == this.l2) || (this.l2 == this.l3) || (this.l1 == this.l3);
    }

    isScalene() : boolean {
        
        if (!this.isTriangle()) return false;

        return (this.l1 != this.l2) && (this.l2 != this.l3);
    }
    
    isEquilateral() : boolean {
        
        if (!this.isTriangle()) return false;

        return (this.l1 == this.l2) && (this.l2 == this.l3);
    }

}

function main() : void {

    // creating instances of Triangle class
    const t1 : Triangle = new Triangle(3, 3, 3);
    const t2 : Triangle = new Triangle(3, 3, 5);
    const t3 : Triangle = new Triangle(3, 2, 9);

    // executing methods
    
    // t1:
    console.log("t1: is triangle? " + t1.isTriangle());
    console.log("t1: is isosceles? " + t1.isIsosceles());
    console.log("t1: is scalene? " + t1.isScalene());
    console.log("t1: is equilateral? " + t1.isEquilateral() + "\n");

    // t2
    console.log("t2: is triangle? " + t2.isTriangle());
    console.log("t2: is isosceles? " + t2.isIsosceles());
    console.log("t2: is scalene? " + t2.isScalene());
    console.log("t2: is equilateral? " + t2.isEquilateral() + "\n");

    // t3
    console.log("t3: is triangle? " + t3.isTriangle());
    console.log("t3: is isosceles? " + t3.isIsosceles());
    console.log("t3: is scalene? " + t3.isScalene());
    console.log("t3: is equilateral? " + t3.isEquilateral() + "\n");
}

main();