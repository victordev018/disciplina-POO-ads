import Account from "./Account";

export class InvestmentAccount extends Account{

    private incomeRate : number;

    constructor(numberAccount: string, balance: number, incomeRate: number) {
        super(numberAccount, balance);
        this.incomeRate = incomeRate;
    }

    public getIncomeRate() : number {
        return this.incomeRate;
    }

    public applyIncome() : void {
        const income : number = this.consultBalance() * (this.incomeRate/100);
        this.deposit(income);
    }
}