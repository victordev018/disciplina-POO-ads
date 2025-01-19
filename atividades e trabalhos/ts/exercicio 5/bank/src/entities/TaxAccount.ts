import Account from "./Account";

export class TaxAccount extends Account{
    
    private taxRate: number = 0.38 / 100;

    constructor(number: string, balance: number){
        super(number, balance);
    }

    withdraw(amount: number): boolean {
        let taxRate : number = amount * this.taxRate;
        let totalWithdraw = amount + taxRate;
        return super.withdraw(totalWithdraw);
    }
}