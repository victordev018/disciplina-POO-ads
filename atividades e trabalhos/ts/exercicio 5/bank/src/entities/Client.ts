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
}

export default Client;