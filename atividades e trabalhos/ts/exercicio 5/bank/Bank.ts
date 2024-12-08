import Account from "./Account";
import Client from "./Client";

class Bank {

    private accounts: Account[];
    private clients: Client[];

    constructor() {
        this.accounts = [];
        this.clients = [];
    }

    insertAccount(account: Account): void {
        const number = account.number;
        const id = account.id;

        if(this.numberOrIdAlreadyExists(number, id)){
            console.log("Account already exists");
            return;
        }
        this.accounts.push(account);
    }

    consultAccount(number: string): Account {
        let accountSearched!: Account;
        accountSearched = this.accounts.filter( account => account.number == number)[0];
        return accountSearched;
    }

    consultClient(cpf: string) : Client {

        let clientSearched!: Client;
        clientSearched = this.clients.filter(client => client.cpf == cpf)[0];
        return clientSearched;
    }

    consultClientPerIndex(numberAccount: string) : number {
        let indexWanted = -1, i;

        for (i = 0; i < this.accounts.length; i++) {
            if (this.accounts[i].number == numberAccount) {
                indexWanted = i;
                break;
            }
        }
        return indexWanted;
    }

    delete(numberAccount: string) : void {

        let index = this.consultClientPerIndex(numberAccount);

        if(index != -1) {
            for(let i = index; i < this.accounts.length-1; i++){
                this.accounts[i] = this.accounts[i+1];
            }
            this.accounts.pop();
        }
    }

    update(account: Account) : void {
        const index = this.consultClientPerIndex(account.number);
        if (index != null) {
            this.accounts[index] = account;
        }
    }

    withDraw(numberAccount: string, value:number) : void {
        const index = this.consultClientPerIndex(numberAccount);
        if (index != null) {
            const account = this.accounts[index];
            account.withdraw(value);
        }
    }

    deposit(numberAccount: string, value:number) {
        const index = this.consultClientPerIndex(numberAccount);
        if (index != null) {
            const account = this.accounts[index];
            account.deposit(value);
        }
    }

    transfer(numberAccountTarget:string, numberAccountDestiny:string, value:number) {
        const indexTarget = this.consultClientPerIndex(numberAccountTarget);
        const indexDestiny = this.consultClientPerIndex(numberAccountDestiny);

        if(indexTarget != -1 && indexDestiny != -1) {
            const accountTarget = this.accounts[indexTarget];
            const accountDestiny = this.accounts[indexDestiny];
            accountTarget.transfer(accountDestiny, value);
        }
    }

    transferToListAccount(accounts: Account[], value:number) {
        accounts.forEach((ac: Account) => {
            ac.deposit(value);
        });
    }

    quantityAccounts() : number {
        return this.accounts.length;
    }

    totalBalance() : number {
        const arrayBalances = this.accounts.map( ac => ac.balance);
        const sumTotal = arrayBalances.reduce((sum, current) => sum += current);
        return sumTotal;
    }

    averageBalance() : number {
        const average = this.totalBalance() / this.quantityAccounts();
        return average;
    }

    associateClientToAccount(numberAccount: string, cpfClient:string): void{
        const accountSearched = this.consultAccount(numberAccount);
        const clientSearched = this.consultClient(cpfClient);

        if(this.accountBelongsToTheClient(accountSearched, clientSearched)) {
            console.log("Client already has this account");
            return;
        }

        clientSearched.accounts.push(accountSearched);
    }

    listAccountsFromClient(cpf: string) : Account[] {
        const client = this.consultClient(cpf);
        return client.accounts;
    }

    totalClientBalance(cpfClient: string) : number {
        const client = this.consultClient(cpfClient);
        const accounts = client.accounts;
        const arrayBalances = accounts.map(account => account.balance);
        const totalBalance = arrayBalances.reduce((previous, current) => previous+=current);
        return totalBalance;
    }

    insertClient(client: Client): void {
        const cpf = client.cpf;
        const id = client.id;
        if(this.cpfOrIdAlreadyExists(cpf, id)){
            console.log("Client already exists");
            return;
        }

        this.clients.push(client);
    }

    private cpfOrIdAlreadyExists(cpf:string, id:number) : boolean {
        if(this.accounts.length == 0) return false;
        return this.clients.filter(client => client.cpf == cpf || client.id == id).length > 0
    }
    
    private numberOrIdAlreadyExists(numberAccount:string, id:number) : boolean {
        if(this.clients.length == 0) return false;
        return this.accounts.filter(account => account.number == numberAccount || account.id == id).length > 0
    }

    private accountBelongsToTheClient(account: Account, client: Client): boolean{
        return client.accounts.indexOf(account) != -1;
    }
}

export default Bank;