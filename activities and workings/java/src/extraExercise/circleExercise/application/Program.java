package extraExercise.circleExercise.application;

import extraExercise.circleExercise.entities.Circle;

public class Program {

    public static void main(String[] args) {

        // creating instance
        Circle circle = new Circle(6.0);

        // show Area and Perimeter values
        System.out.printf("Area: %.2f%n", circle.calculateArea());
        System.out.printf("Perimeter: %.2f", circle.calculatePerimeter());
    }
}
