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
        accountSearched = this.accounts.filter( account => account.number === number)[0];
        return accountSearched;
    }

    consultClient(cpf: string) : Client {

        let clientSearched!: Client;
        clientSearched = this.clients.filter(client => client.cpf === cpf)[0];
        return clientSearched;
    }

    addClient(client: Client): void {
        this.clients.push(client);
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
        return this.clients.filter(client => client.cpf == cpf || client.id == id).length > 0
    }
    
    private numberOrIdAlreadyExists(numberAccount:string, id:number) : boolean {
        return this.accounts.filter(account => account.number == numberAccount || account.id == id).length > 0
    }

    private accountBelongsToTheClient(account: Account, client: Client): boolean{
        return client.accounts.indexOf(account) != -1;
    }
}