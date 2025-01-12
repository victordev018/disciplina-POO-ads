import Account from "./Account";

export class SavingsAccount extends Account {

    private interestRate: number;

    constructor(number: string, balance: number, interestRate: number){
        super(number, balance);
        this.interestRate = interestRate;
    }

    public earnInterest() : void {
        let interest: number = this.consultBalance() * this.interestRate / 100;
        this.deposit(interest);
    }
}