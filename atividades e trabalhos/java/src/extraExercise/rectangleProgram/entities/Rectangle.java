package extraExercise.rectangleProgram.entities;

import java.util.Objects;

public class Rectangle {

    // attributes
    private Double l1;
    private Double l2;

    // constructors
    public Rectangle(){
    }

    public Rectangle(Double l1, Double l2){
        this.l1 = l1;
        this.l2 = l2;
    }

    // getters
    public Double getL1() {
        return l1;
    }

    public Double getL2() {
        return l2;
    }


    // methods
    public void setValues(Double l1, Double l2){
        this.l1 = l1;
        this.l2 = l2;
    }

    public Double calculateArea(){
        return l1 * l2;
    }

    public Double calculatePerimeter(){
        return 2 * (l1 + l2);
    }

    public Boolean rectangleIsASquare(){
        return l1.equals(l2);
    }
}
