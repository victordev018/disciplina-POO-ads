package extra2Exercise.audioControlExercise.java;

public class AudioControl {

    // attributes
    private Integer volumeValue;

    // constructor
    public AudioControl(){
        this.volumeValue = 2;   // default
    }

    // methods

    public void increaseVolume(){

        if (volumeValue == 10){
            System.out.println("\n> volume is already at maximum: " + volumeValue);
            return;
        }

        this.volumeValue++;
    }

    public void decreaseVolume(){

        if (volumeValue == 1) {
            System.out.println("volume is already at minimum: " + volumeValue);
            return;
        }

        this.volumeValue--;
    }

    public Integer readVolume(){
        return this.volumeValue;
    }

}
