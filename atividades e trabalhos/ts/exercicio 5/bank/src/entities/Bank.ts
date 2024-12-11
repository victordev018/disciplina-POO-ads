import { cp } from "fs";
import Account from "./Account";
import Client from "./Client";

class Bank {

    private accounts: Account[];
    private clients: Client[];
    private currentAccountId: number;
    private currentClientId: number;

    constructor() {
        this.accounts = [];
        this.clients = [];
        this.currentAccountId = 0;
        this.currentClientId = 0;
    }

    insertAccount(account: Account): void {
        const number = account.number;
        account.id = ++this.currentAccountId;

        if(this.numberOrIdAlreadyExists(number, account.id)){
            console.log(`Conta de numero: ${number} ja está cadastrada`);
            return;
        }
        this.accounts.push(account);
    }

    consultAccount(number: string): Account | null {
        let accountSearched: Account[];
        accountSearched = this.accounts.filter( account => account.number == number);
        return accountSearched.length > 0 ? accountSearched[0] : null;
    }

    consultClient(cpf: string) : Client | null {

        let clientSearched: Client[];
        clientSearched = this.clients.filter(client => client.cpf == cpf);
        return clientSearched.length > 0 ? clientSearched[0] : null;
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

    delete(numberAccount: string) : boolean {

        let index = this.consultClientPerIndex(numberAccount);

        if(index != -1) {
            for(let i = index; i < this.accounts.length-1; i++){
                this.accounts[i] = this.accounts[i+1];
            }
            this.accounts.pop();
            return true;
        }

        console.log(`Nao foi encontrada conta com o numero: ${numberAccount}`);
        return false;
    }

    update(account: Account) : void {
        const index = this.consultClientPerIndex(account.number);
        if (index != null) {
            this.accounts[index] = account;
        }
    }

    withDraw(numberAccount: string, value:number) : boolean {
        const index = this.consultClientPerIndex(numberAccount);
        if (index != -1) {
            const account = this.accounts[index];
            return account.withdraw(value);
        }
        console.log(`Nao fou encontrada conta com o numero: ${numberAccount}`);
        return false;
    }

    deposit(numberAccount: string, value:number) : boolean {
        const index = this.consultClientPerIndex(numberAccount);
        if (index != -1) {
            const account = this.accounts[index];
            account.deposit(value);
            return true;
        }

        console.log(`Nao fou encontrada conta com o numero: ${numberAccount}`);
        return false;
    }

    transfer(numberAccountTarget:string, numberAccountDestiny:string, value:number) : boolean {
        const indexTarget = this.consultClientPerIndex(numberAccountTarget);
        const indexDestiny = this.consultClientPerIndex(numberAccountDestiny);

        if(indexTarget != -1 && indexDestiny != -1) {
            const accountTarget = this.accounts[indexTarget];
            const accountDestiny = this.accounts[indexDestiny];
            const transferSuccessfully = accountTarget.transfer(accountDestiny, value);
            return transferSuccessfully;
        }

        console.log(`conta ${numberAccountTarget} ou conta ${numberAccountDestiny} nao encontrada `);
        return false;
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

    associateClientToAccount(numberAccount: string, cpfClient:string): boolean {
        const accountSearched = this.consultAccount(numberAccount);
        const clientSearched = this.consultClient(cpfClient);

        // case account and client exists
        if (accountSearched && clientSearched) {
            // case account belongs to the client
            if(this.accountBelongsToTheClient(accountSearched, clientSearched)) {
                console.log(`\nCliente de cpf ${cpfClient} ja possui conta de numero ${numberAccount}`);
                return false;
            }
            clientSearched.accounts.push(accountSearched);
            accountSearched.client = clientSearched;
            return true;
        }

        console.log(`\nConta de numero: ${numberAccount} ou cliente de cpf: ${cpfClient} nao encontrados`)
        return false;
    }

    listAccountsFromClient(cpf: string) : Account[] | null {
        const client = this.consultClient(cpf);
        if (client != null)
            return client.accounts;

        console.log(`Nao foi encontrado cliente de cpf: ${cpf}`);
        return null;
    }

    totalClientBalance(cpfClient: string) : number | null {
        const client = this.consultClient(cpfClient);
        if ( client != null) {
            const accounts = client.accounts;
            const arrayBalances = accounts.map(account => account.balance);
            const totalBalance = arrayBalances.reduce((previous, current) => previous+=current);
            return totalBalance;
        }

        console.log(`Nao foi encontrado cliente de cpf: ${cpfClient}`);
        return null;
    }

    insertClient(client: Client): boolean {
        const cpf = client.cpf;
        client.id = ++this.currentClientId;
        if(this.cpfOrIdAlreadyExists(cpf, client.id)){
            console.log(`\nCliente de cpf ${cpf} ja esta cadastrado`);
            return false;
        }

        this.clients.push(client);
        return true;
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