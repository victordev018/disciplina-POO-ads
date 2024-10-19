package extraExercise.rectangleProgram.application;

import extraExercise.rectangleProgram.entities.Rectangle;

public class Program {

    public static void main(String[] args){

        // creating instance
        Rectangle rectangle = new Rectangle();

        // set values with method
        rectangle.setValues(2.0, 4.0);

        // show values
        System.out.println("Area: " + rectangle.calculateArea());               // out: 8.0
        System.out.println("Perimeter: " + rectangle.calculatePerimeter());     // out: 12.0
    }

}
