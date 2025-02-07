import { AlreadyExists } from "../exceptions/AlreadyExists";
import { ClientAlreadyHasAccount } from "../exceptions/ClientAlreadyHasAccount";
import { ClientNotFoundError } from "../exceptions/ClientNotFoundError";
import { InsufficientBalanceError } from "../exceptions/InsufficientBalanceError";
import { NonExistentAccountError } from "../exceptions/NonExistentAccountError";
import { UnauthorizedError } from "../exceptions/UnauthorizedError";
import Account from "./Account";
import Client from "./Client";
import { InvestmentAccount } from "./InvestmentAccount";
import { SavingsAccount } from "./SavingsAccount";

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

    getListAccounts() : Array<Account> {
        return this.accounts;
    }

    getListClients() : Array<Client> {
        return this.clients;
    }

    insertAccount(account: Account): boolean {
        const number = account.getNumber();
        account.setId(++this.currentAccountId);

        if(this.numberOrIdAlreadyExists(number, account.getId())){
            console.log(`\nConta de numero: ${number} ja está cadastrada`);
            return false;
        }
        this.accounts.push(account);
        return true;
    }

    consultAccount(number: string): Account {
        let accountSearched: Account[];
        accountSearched = this.accounts.filter( account => account.getNumber() == number);
        if (accountSearched.length > 0) {
            return accountSearched[0];
        }
        throw new NonExistentAccountError("Conta não encontrada com numero: " + number);
    }

    consultClient(cpf: string) : Client {

        let clientSearched: Client[];
        clientSearched = this.clients.filter(client => client.getCpf() == cpf);
        if (clientSearched.length > 0) {
            return clientSearched[0];
        }
        throw new ClientNotFoundError("Cliente não encontrado com cpf: " + cpf);
    }

    private consultAccountPerIndex(numberAccount: string) : number {
        let indexWanted = -1, i;

        for (i = 0; i < this.accounts.length; i++) {
            if (this.accounts[i].getNumber() == numberAccount) {
                indexWanted = i;
                break;
            }
        }
        if (indexWanted != -1)
            return indexWanted;

        throw new NonExistentAccountError("Conta não encontrada com numero: " + numberAccount);
    }

    private consultClientPerIndex(cpfClient: string) : number {
        let indexWanted = -1, i;

        for (i = 0; i < this.clients.length; i++) {
            if (this.clients[i].getCpf() == cpfClient) {
                indexWanted = i;
                break;
            }
        }
        if (indexWanted != -1)
            return indexWanted;

        throw new ClientNotFoundError("Cliente não encontrado com cpf: " + cpfClient);
    }

    deleteAccount(numberAccount: string) : boolean {

        let index = this.consultAccountPerIndex(numberAccount);
        
        if(index != -1) {
            // remove reference in client account list
            const accountToRemove = this.consultAccount(numberAccount);
            if (accountToRemove != null) {
                const clientAssociated = accountToRemove?.getClient();
                clientAssociated?.removeAccount(accountToRemove);
            }

            for(let i = index; i < this.accounts.length-1; i++){
                this.accounts[i] = this.accounts[i+1];
            }
            this.accounts.pop();
            return true;
        }

        console.log(`\nNao foi encontrada conta com o numero: ${numberAccount}`);
        return false;
    }

    update(account: Account) : void {
        const index = this.consultClientPerIndex(account.getNumber());
        this.accounts[index] = account;
    }

    withDraw(numberAccount: string, value:number) {
        const index = this.consultAccountPerIndex(numberAccount);
        const account = this.accounts[index];
        return account.withdraw(value);
    }

    deposit(numberAccount: string, value:number) {
        const index = this.consultClientPerIndex(numberAccount);
        const account = this.accounts[index];
        account.deposit(value);
    }

    transfer(numberAccountTarget:string, numberAccountDestiny:string, value:number) {
        const indexTarget = this.consultClientPerIndex(numberAccountTarget);
        const indexDestiny = this.consultClientPerIndex(numberAccountDestiny);

        const accountTarget = this.accounts[indexTarget];
        const accountDestiny = this.accounts[indexDestiny];
        accountTarget.transfer(accountDestiny, value);
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
        const arrayBalances = this.accounts.map( ac => ac.consultBalance());
        const sumTotal = arrayBalances.reduce((sum, current) => sum += current);
        return sumTotal;
    }

    averageBalance() : number {
        const average = this.totalBalance() / this.quantityAccounts();
        return average;
    }

    associateClientToAccount(numberAccount: string, cpfClient:string) {
        const accountSearched = this.consultAccount(numberAccount);
        const clientSearched = this.consultClient(cpfClient);

        // case account belongs to the client
        if(this.accountBelongsToTheClient(accountSearched, clientSearched)) {
            throw new ClientAlreadyHasAccount(`Cliente de cpf ${cpfClient} ja possui conta de numero ${numberAccount}`);
        }
        clientSearched.addAccount(accountSearched);
    }

    listAccountsFromClient(cpf: string) : Account[] {
        const client = this.consultClient(cpf);
        return client.getAccounts();
    }

    totalClientBalance(cpfClient: string) : number {
        const client : Client = this.consultClient(cpfClient);
        const accounts : Account[] = client.getAccounts();
        const arrayBalances : number[] = accounts.map(account => account.consultBalance());
        const totalBalance : number = arrayBalances.reduce((previous, current) => previous+=current);
        return totalBalance;
    }

    insertClient(client: Client) {
        const cpf = client.getCpf();
        client.setId(++this.currentClientId);
        if(this.cpfOrIdAlreadyExists(cpf, client.getId())){
            throw new AlreadyExists(`Cliente de cpf ${cpf} ja esta cadastrado`);
        }
        this.clients.push(client);
    }

    changeAccountHolder(numberAccount: string, cpfNewClient: string) {
        const newClient = this.consultClient(cpfNewClient);
        const account = this.consultAccount(numberAccount);

        const oldClient = account.getClient();
        account.setClient(newClient);
        newClient.addAccount(account);
        oldClient?.removeAccount(account);
    }

    deleteClient(cpfClient: string) {
        let index = this.consultClientPerIndex(cpfClient);
    
        // remove this client of the accounts
        this.removeAllOccurrencesInAccounts(cpfClient);

        for(let i = index; i < this.clients.length-1; i++){
            this.clients[i] = this.clients[i+1];
        }
        this.clients.pop();
    }

    getAccountsWithoutClient() : Account[] {

        const subList = this.accounts.filter(a => a.getClient() == null);
        return subList;

    }

    transferToAll(sourceNumberAccount: string, numberAccounts: string[], amount: number) {

        const sourceAccount = this.consultAccount(sourceNumberAccount);

        // checking if all destiny accounts exists
        const listWithNumbersAccountsBank = this.accounts.map(a => a.getNumber());
        for (let number of numberAccounts) {
            if (!this.listHasValue(listWithNumbersAccountsBank, number)) {
                throw new NonExistentAccountError(`A conta numero ${number} nao foi encontrada.`);
            }
        }

        // checking if source account has sufficient balance
        const totalExpanse = numberAccounts.length * amount;
        if (sourceAccount.consultBalance() < totalExpanse) {
            throw new InsufficientBalanceError("Saldo insuficiente");
        }

        const listDestinyAccounts : Array<Account> = [];
        for (let numberAccount of numberAccounts ) {
            let currentAccount = this.consultAccount(numberAccount);
            listDestinyAccounts.push(currentAccount);
        }
        
        this.transferToListAccount(listDestinyAccounts, amount);
        sourceAccount.withdraw(totalExpanse);
    }

    earnInterest(numberAccount : string) {
        const accountSearched: Account = this.consultAccount(numberAccount);
        if (!(accountSearched instanceof SavingsAccount)) {
            throw new UnauthorizedError(`Conta de nao autorizada, conta ${numberAccount} nao e SavingsAccount`);
        }
        accountSearched.earnInterest();
    }

    applyIncome(numberAccount: string) {
        const accountSearched : Account = this.consultAccount(numberAccount);

        if (!(accountSearched instanceof InvestmentAccount)) {
            throw new UnauthorizedError(`Conta de nao autorizada, conta ${numberAccount} nao e InvestmentAccount`);
        }
        accountSearched.applyIncome();
    }

    private listHasValue(list: Array<any>, value: any) : boolean {
        for (let currentValue of list) {
            if (currentValue == value)
                return true;
        };
        return false;
    }

    private removeAllOccurrencesInAccounts(cpfClient: string) : void {
        for (let account of this.accounts) {
            if (account.getClient()?.getCpf() == cpfClient) {
                account.setClient(null);
            }
        }
    }

    private cpfOrIdAlreadyExists(cpf:string, id:number) : boolean {
        if(this.clients.length == 0) return false;
        return this.clients.filter(client => client.getCpf() == cpf || client.getId() == id).length > 0
    }
    
    private numberOrIdAlreadyExists(numberAccount:string, id:number) : boolean {
        if(this.accounts.length == 0) return false;
        return this.accounts.filter(account => account.getNumber() == numberAccount || account.getId() == id).length > 0
    }

    private accountBelongsToTheClient(account: Account, client: Client): boolean{
        return client.getAccounts().indexOf(account) != -1;
    }
}

export default Bank;