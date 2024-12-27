import Account from "./Account";

class Client {

    private id: number;
    private name: string;
    private cpf: string;
    private birthDate: Date;
    private accounts: Account[];

    constructor(name:string, cpf:string, birthDate: Date) {
        this.id = 0;
        this.name = name;
        this.cpf = cpf;
        this.birthDate = birthDate;
        this.accounts = [];
    }

    // getters and setters
    public getId() : number {
        return this.id;
    }

    public setId(id : number) :void {
        this.id = id;
    }

    public getName() : string {
        return this.name;
    }

    public setName(name : string) :void {
        this.name = name;
    }

    public getCpf() : string {
        return this.cpf;
    }

    public setCpf(cpf : string) :void {
        this.cpf = cpf;
    }

    public getBirthDate() : Date {
        return this.birthDate;
    }

    public setBirthDate(birthDate : Date) :void {
        this.birthDate = birthDate;
    }

    removeAccount(account: Account) : boolean {
        const index = this.getIndexFromAccount(account);
        if (index != -1) {
            this.deleteByIndex(index);
            return true;
        }

        return false;
    }

    addAccount(account: Account) : void {
        this.accounts.push(account);
    }

    getAccounts() : Account[] {
        return this.accounts;
    }

    private deleteByIndex(index: number) : void {
        for (let i = index; i < this.accounts.length - 1; i++) {
            this.accounts[i] = this.accounts[i+1];
        }
        this.accounts.pop();
    }

    private getIndexFromAccount(account: Account) {
        let index = -1;
        for (let i = 0; i < this.accounts.length; i++) {
            if (this.accounts[i].number == account.number) {
                index = i;
                break;
            }
        }
        return index;
    }
}

export default Client;