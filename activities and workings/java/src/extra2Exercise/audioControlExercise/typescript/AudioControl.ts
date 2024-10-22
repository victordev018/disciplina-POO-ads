
export class AudioControl{

    // attributes
    private volumeValue : number;

    // constructor
    constructor() {
        this.volumeValue = 2;   // default
    }

    // methods
    increaseVolume() : void {

        if (this.volumeValue == 10){
            console.log("\n> volume is already at maximum: " + this.volumeValue);
            return;
        }

        this.volumeValue++;
    }

    decreaseVolume() : void {

        if (this.volumeValue == 1){
            console.log("volume is already at minimum: " + this.volumeValue);
            return;
        }

        this.volumeValue--;
    }

    readVolume() : number {
        return this.volumeValue;
    }

}

function main(){

    const v : AudioControl = new AudioControl();

    v.increaseVolume();
    v.increaseVolume();
    v.increaseVolume();
    v.decreaseVolume();

    console.log("current volume: " + v.readVolume());   // out: 4

}

main();