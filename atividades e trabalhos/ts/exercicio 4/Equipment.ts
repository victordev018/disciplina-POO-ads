
class Equipment {

    private connected : boolean;

    constructor(){
        this.connected = false;
    }

    // methods

    connect() : void {
        if (this.isOn()) return;
        this.connected = true;
    }

    disconnect() : void {
        if(!this.isOn()) return;
        this.connected = false;
    }

    invert() : void {
        this.connected = this.connected ? false : true;
    }

    isOn() : boolean {
        return this.connected;
    }

}

function main() : void {

    const equipment : Equipment = new Equipment();
    console.log();
    console.log("is on: " + equipment.isOn());
    equipment.connect();
    console.log("is on: " + equipment.isOn());
    equipment.disconnect();
    console.log("is on: " + equipment.isOn());
    equipment.invert();
    console.log("is on: " + equipment.isOn());
    console.log();

}

main();