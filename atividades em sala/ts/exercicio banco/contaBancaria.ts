
export class Account {


    private number : string;
    private balance : number;

    constructor(number: string, balance : number){
        this.number = number;
        this.balance = balance;
    }

    withdraw(amount : number) : void{
        this.balance -= amount;
    }

    deposit(amount :number) : void{
        this.balance += amount;
    }

    consultBalance() : number {
        return this.balance;
    }

    transfer(destiny :Account, amount : number) : void {
        this.withdraw(amount);
        destiny.deposit(amount);
    }

}

function main(){


    const c1 : Account = new Account("102-1", 2000.0);
    console.log("Balance c1: " + c1.consultBalance());

    // deposit and withdraw
    c1.deposit(100);
    c1.withdraw(2000);

    // check balance
    console.log("Balance c1: " + c1.consultBalance());

    // creating a new account and making the transfer from c1 to c2  
    const c2 : Account = new Account("103-2", 0);
    c1.transfer(c2, 20);

    // displaying account balances
    console.log("Balance c1: " + c1.consultBalance());
    console.log("Balance c2: " + c2.consultBalance());

}

main();
