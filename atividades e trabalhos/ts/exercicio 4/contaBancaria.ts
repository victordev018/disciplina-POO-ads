
export class Account {


    private number : string;
    private balance : number;

    constructor(number: string, balance : number){
        this.number = number;
        this.balance = balance;
    }

    withdraw(amount : number) : boolean {

        if (amount > this.balance) return false;

        this.balance -= amount;
        return true;
    }

    deposit(amount :number) : void{
        this.balance += amount;
    }

    consultBalance() : number {
        return this.balance;
    }

    transfer(destiny :Account, amount : number) : boolean {
        if(!this.withdraw(amount)) return false;
        destiny.deposit(amount);
        return true;
    }

}

function main(){


    const c1 : Account = new Account("102-1", 2000.0);
    const c2 : Account = new Account("103-2", 0);
    
    console.log("c2 transfer $20 to c1: " + c2.transfer(c1, 20));
    console.log("c1 transfer $2000 to c2: " + c1.transfer(c2, 2000));
    console.log("c1 can withdraw $20? " + c1.withdraw(20));
}

main();
