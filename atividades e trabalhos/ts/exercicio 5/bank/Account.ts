import Client from "./Client";

class Account {

    id: number;
    number : string;
    balance : number;
    client : Client;

    constructor(id: number, number: string, balance : number){
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

export default Account;