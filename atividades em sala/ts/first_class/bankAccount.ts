

export class BankAccount {

    // attributes
    private id : string;
    private cpf : string;
    private balance : number;

    // constructors
    constructor(id: string, cpf : string, balance : number){
        this.id = id;
        this.cpf = cpf;
        this.balance = balance;
    }

    // getters and setters
    getId(){
        return this.id;
    }

    getCpf(){
        return this.cpf;
    }

    getBalance(){
        return this.balance;
    }

    // methods

    deposit(amount: number){
        this.balance += amount;
    }

    withdraw(amount : number){
        this.balance -= amount;
    }
}

function main(){

    // instance of bank account
    const account: BankAccount = new BankAccount("7624", "123.999.098-09", 2000.0);

    // show data
    showDataAccount(account, "\n> data before deposit:");

    // doing deposit
    account.deposit(260.0);

    // show data
    showDataAccount(account, "\n> data after deposit: ");

    // doing withdraw
    account.withdraw(100.0);

    // show data
    showDataAccount(account, "\n> data after withdraw: ");
}

function showDataAccount(account: BankAccount, message: string): void {
    console.log(message);
    console.log("\n| cpf: " + account.getCpf() + "\n| balance: " + account.getBalance().toFixed(2));
}

main();