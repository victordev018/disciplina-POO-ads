
class Greeting {

    text : string;
    recipient : string;

    constructor(text : string,  recipient: string){
        this.text = text;
        this.recipient = recipient;
    }

    getGreeting() : string {
        return this.text + " " +  this.recipient; 
    }

}

function main(){

    const greeting1 : Greeting = new Greeting("Good Morning", "Ely");

    console.log(greeting1.getGreeting());

}

main();