import { InsufficientBalanceError } from "../exceptions/InsufficientBalanceError";
import { InvalidValueError } from "../exceptions/InvalidValueError";
import Client from "./Client";

class Account {

    private id: number;
    private number : string;
    private balance : number = 0;
    private client : Client | null;

    constructor(number: string, balance: number){
        this.id = 0;
        this.number = number;
        this.deposit(balance);
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
    withdraw(amount : number){
        this.validateValue(amount);
        if (amount > this.balance) throw new InsufficientBalanceError("Insufficient balance");

        this.balance -= amount;
    }

    deposit(amount :number) : void{
        this.balance += amount;
    }

    consultBalance() : number {
        return this.balance;
    }

    transfer(destiny :Account, amount : number) {
        this.validateValue(amount);
        this.withdraw(amount);
        destiny.deposit(amount);
    }

    private validateValue(value: number) {
        if (value <= 0) throw new InvalidValueError("Invalid value, must be greater than zero");
    }
}

export default Account;