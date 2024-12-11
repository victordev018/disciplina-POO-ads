import Account from "./Account";

class Client {

    id: number;
    name: string;
    cpf: string;
    birthDate: Date;
    accounts: Account[];

    constructor(id:number, name:string, cpf:string, birthDate: Date) {
        this.id = id;
        this.name = name;
        this.cpf = cpf;
        this.birthDate = birthDate;
        this.accounts = [];
    }
}

export default Client;