import Client from "./Client";

class Account {

    private id: number;
    private number : string;
    private balance : number;
    private client : Client | null;

    constructor(number: string, balance: number){
        this.id = 0;
        this.number = number;
        this.balance = balance;
        this.client = null;
    }

    // getters and setters
    public getId() : number {
        return this.id;
    }

    public setId(id: number) : void {
        this.id = id;
    }

    public getNumber() : string {
        return this.number;
    }

    public setNumber(number: string) : void {
        this.number = number;
    }

    public getClient() : Client | null{
        return this.client;
    }

    public setClient(client: Client | null) : void {
        this.client = client;
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