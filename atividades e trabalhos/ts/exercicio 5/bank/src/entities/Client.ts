import Account from "./Account";

class Client {

    id: number;
    name: string;
    cpf: string;
    birthDate: Date;
    accounts: Account[];

    constructor(name:string, cpf:string, birthDate: Date) {
        this.id = 0;
        this.name = name;
        this.cpf = cpf;
        this.birthDate = birthDate;
        this.accounts = [];
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