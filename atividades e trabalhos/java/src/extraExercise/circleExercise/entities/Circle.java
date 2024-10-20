package extraExercise.circleExercise.entities;

public class Circle {

    // attributes
    private Double radius;

    // constructors
    public Circle(){
    }

    public Circle(Double radius){
        this.radius = radius;
    }

    // get and set
    public Double getRadius(){
        return radius;
    }

    public void setRadius(Double radius){
        this.radius = radius;
    }

    // methods
    public Double calculateArea(){
        return Math.PI * (radius * radius);
    }

    public Double calculatePerimeter(){
        return 2 * Math.PI * radius;
    }

}
