import prompt from "prompt-sync";
import Account from "./Account";
import Bank from "./Bank";
import Client from "./Client";
import { SavingsAccount } from "./SavingsAccount";
import { TaxAccount } from "./TaxAccount";
import { FileHandler } from "./FileHandler";
import { InvestmentAccount } from "./InvestmentAccount";

const input = prompt();

class App {

    private bank: Bank;
    private fileHandler: FileHandler;

    constructor (bank: Bank) {
        this.bank = bank;
        this.fileHandler = new FileHandler();
    }

    showMenu() : void {
        const menu = `
        \nBem vindo\nDigite uma opção:\n
        Contas:\n
        1 - Inserir              2 - Consultar          3 - Sacar
        4 - Depositar            5 - Excluir            6 - Transferir
        7 – Totalizações         8 - mudar titularidade
        9 - Contas sem cliente  10 - tranferir para varias contas
        11 - Render juros        I - aplicar rendimento conta Investimento
        
        Clientes:\n
        12 - Inserir    13 - Consultar 
        14 - Associar   15 - deletar
        
        Persistência e Recuperacao de Dados:\n
        16 - Salvar contas      17 - Recuperar contas salvas
        
        Sistema:\n
        0 - Sair
        `
        console.log(menu);
    }

    // 1 - insert account
    insertAccount(): void {
        console.log("\nCadastrar conta\n");

        const numberAccount: string = input('Digite o número da conta:');
        const initialBalance = parseFloat(input("Saldo inicial: R$ "));
        const typeAccount: string = input("Tipo de conta (1 - Conta, 2 - Poupança, 3 - Investimento, 4 - Imposto): ");
    
        if (typeAccount === "1") {
            this.bank.insertAccount(new Account(numberAccount, initialBalance));
        }
        else if (typeAccount === "2") {
            const interestRate: number = parseFloat(input("Informe a taxa de juros: "));
            this.bank.insertAccount(new SavingsAccount(numberAccount, initialBalance, interestRate));
        }
        else if (typeAccount === "3") {
            const incomeRate : number = parseFloat(input("Informe a taxa de rendimento: "));
            this.bank.insertAccount(new InvestmentAccount(numberAccount, initialBalance, incomeRate));
        }
        else {
            this.bank.insertAccount(new TaxAccount(numberAccount, initialBalance));
        }
        
        console.log("\nConta cadastrada com sucesso!");
    }

    // 2 - consult account
    consultAccount() : void {
        console.log("\nConsultar conta\n");
        const numberAccount: string = input("Digite o numero da conta: ");
        this.showExtract(numberAccount);
    }

    // 3 - withdraw
    withdraw() : void {
        console.log("Realziar saque:");
        const numberAccount = input("Numero da conta: ");
        const amount = parseFloat(input("Valor a sacar: "));
        if (this.bank.withDraw(numberAccount, amount)) {
            console.log("\nSaque efetuado com sucesso!");
            this.showExtract(numberAccount);
            return
        }

        console.log("\nFalha ao efetuar saque");
    }

    // 4 - deposit
    deposit() : void {
        console.log("Realziar deposito:");
        const numberAccount = input("Numero da conta: ");
        const amount = parseFloat(input("Valor a depositar: "));
        if (this.bank.deposit(numberAccount, amount)) {
            console.log("\nSaque efetuado com sucesso!");
            this.showExtract(numberAccount);
            return
        }

        console.log("\nFalha ao efetuar deposito");
    }

    // 5 - delete
    deleteAccount() : void {
        console.log("Deletar conta:");
        const numberAccount = input("Numero da conta: ");

        if (this.bank.deleteAccount(numberAccount)) {
            console.log("\nConta deletada com sucesso");
            return;
        }

        console.log("\nFalha ao excluir conta");
    }

    // 6 - transfer
    transfer() : void {
        console.log("Tranferir dinheiro:");
        const numberAccountTarget = input("numero de sua conta: ");
        const numberAccountDestiny = input("numero conta destino: ")
        const value = parseFloat(input("valor a ser tranferido: R$ "));

        if (this.bank.transfer(numberAccountTarget, numberAccountDestiny, value)) {
            console.log("\ndinheiro tranferido com sucesso!");
            this.showExtract(numberAccountTarget);
            this.showExtract(numberAccountDestiny);
            return;
        }

        console.log(`\nFalha ao tranferir da conta: ${numberAccountTarget} para conta: ${numberAccountDestiny}`);
    }

    // 7 - totalling
    totalling() : void {
        console.log("\nTotalziacao:");
        const total = this.bank.totalBalance();
        console.log(`\nTotal R$ ${total.toFixed(2)}\n`);
    }

    // 8 - change account holder
    changeAccountHolder() : void {
        console.log("\nMudar titular de uma conta\n");

        const numberAccount = input("numero da conta: ");
        const cpfNewHolder = input("cpf novo titular: ");

        if (this.bank.changeAccountHolder(numberAccount, cpfNewHolder)) {
            this.showExtract(numberAccount);
            console.log("\ntitular alterado com sucesso");
            return;
        }

        console.log("\nFalha ao mudar titular da conta!");
    }

    // 9 - get account without client
    getAccountWithoutClient() : void {
        console.log("\nContas sem clientes associados:\n");
        const accounts = this.bank.getAccountsWithoutClient();

        if (accounts.length > 0) {
            for (let account of accounts) {
                console.log(`[ id : ${account.getId()} numero: ${account.getNumber()}]\n`);
            }
            let resp: string;
            do {
                resp = input("\ndeseja associar alguma conta? (s/n): ");

                if (resp == "s")
                    this.associateClientToAccount();

            } while(resp != "n");
        } else {
            console.log("Nao ha contas sem cliente associado.");
        }
        
        console.log("\nOperacao finalizada");
    }

    // 10 - transfer to list accounts
    transferToListAccount() : void {
        console.log("\nTransferir para uma lista de contas\n");

        const soucerAccount = input("numero da conta origem: ");
        const amount = parseFloat(input("valor tranferencia: R$ "));
        const numAccountsdestiny = parseInt(input("quantas contas destinos: "));
        const numbersAccounts: string[] = [];
        for (let i = 0; i < numAccountsdestiny; i++) {
            let currentNumber = input(`${i+1}. numero conta: `);
            numbersAccounts.push(currentNumber);
        }

        if (this.bank.transferToAll(soucerAccount, numbersAccounts, amount)) {
            console.log("\nTransferencias feitas com sucesso!");
            console.log("\nExtrato conta origem:\n");
            this.showExtract(soucerAccount);
            console.log("\nExtrato das contas destinos:\n");
            numbersAccounts.forEach((number) => this.showExtract(number));
            return;
        }

        console.log("\nFalha na transferencia.");
    }

    // 11 - earn interest
    earnInterest() : void {
        console.log("Render juros");

        const numberAccount: string = input("numero da conta: ");

        if (this.bank.earnInterest(numberAccount)) {
            console.log("Sucesso ao render juros!");
            this.showExtract(numberAccount);
            return;
        }

        console.log("Falha ao render juros...");
    }

    // I - apply income
    applyIncome() : void {
        console.log("\nAplicar rendimento");

        const numberAccount : string = input("\nnumero da conta: ");

        if (this.bank.applyIncome(numberAccount)) {
            console.log("\nSucesso ao aplicar rendimento");
            this.showExtract(numberAccount);
            return;
        }

        console.log("\nFalha ao aplicar rendimento");
    }

    // 12 - insert client in this.bank
    insertClient() : void {
        console.log("\nInserir cliente:\n");
        const name = input("informe seu nome: ");
        const cpf = input("informe seu cpf: ");
        const birthDate : Date = this.getDate(input("data nascimento (dd/mm/aaa): "));
        const client = new Client(name, cpf, birthDate);
        if (this.bank.insertClient(client)) {
            console.log("\nConta adicionada com sucesso!");
            return;
        }

        console.log("\nFalha ao adicionar cliente");
    }

    // 13 - consult client
    consultClient() : void {
        console.log("\nConsultar cliente:\n");
        const cpf = input("informe o cpf: ");
        const client = this.bank.consultClient(cpf);

        if (client != null) {
            this.showInfoClient(client);
            return;
        }

        console.log(`\nNao foi encontrado aluno de cpf ${cpf}`);
    }

    // 14 - associate client to acocunt
    associateClientToAccount() : void {
        console.log("\nAssociar conta a cliente\n");
        const numberAccount = input("numero da conta: ");
        const cpfClient = input("cpf cliente: ");

        if (this.bank.associateClientToAccount(numberAccount, cpfClient)) {
            console.log("\nAssociacao entre conta e cliente feita com sucesso!");
            return;
        }

        console.log("\nFalha ao associar conta com o cliente");
    }

    // 15 - delete client
    deleteClient() : void {
        console.log("\nDeletar cliente\n");

        const cpfCliente = input("cpf cliente: ");
        if (this.bank.deleteClient(cpfCliente)) {
            console.log("\nCliente deletado com sucesso!");
            return;
        }

        console.log("\nFalha ao deletar cliente!");
    }

    // 16 - save array of accounts in file
    saveAccountsInFile() : void {
        const accounts : Array<Account> = this.bank.getListAccounts();
        let data: string = "";

        if (accounts.length == 0) {
            console.log("Sem contas no banco!");
            return;
        }

        // case has accounts
        for (const account of accounts) {
            let {typeAccount, id, numberAccount, balance, client, interestRate} = this.getAllDataFromAccount(account);
            // case account is Savings Account
            if (typeAccount == "CP"){
                data += `${typeAccount};${id};${numberAccount};${balance};${client? client.getCpf() : null};${interestRate}\n`;
                continue;
            }
            data += `${typeAccount};${id};${numberAccount};${balance};${client? client.getCpf() : null}\n`;
        }

        this.saveClientsInFile();

        this.fileHandler.writeInFile("../../saves/accounts.txt", data);
        console.log("\nDados salvos com sucesso!\n");
    }

    // function to save client data in file
    saveClientsInFile() : void {
        const clients : Array<Client> = this.bank.getListClients();
        let data: string = "";

        if (clients.length == 0) {
            // console.log("Sem clientes no banco!");
            return;
        }

        // case has clients
        for (const client of clients) {
            let {id, name, cpf, birthDate} = this.getAllDataFromClient(client);
            data += `${id};${name};${cpf};${this.formatDate(birthDate)}\n`;
        }

        this.fileHandler.writeInFile("../../saves/clients.txt", data);
        // console.log("\nDados salvos com sucesso!\n");
    }

    // 17 - recover saved accounts
    recoverAccounts() : void {
        // get all data
        const data : string = this.fileHandler.readFile("../../saves/accounts.txt");

        // check if has data
        if (data.length == 0) {
            console.log("\nSem dados salvos...");
            return;
        }

        // recover clients
        this.recoverClients();

        // saves each line as an element of an array
        const lines : Array<string> = data.split("\n");
        lines.pop();    // last line is empty

        // process lines
        for (const line of lines) {
            const elements : Array<string> = line.split(';');
            let [typeAcc, idAcc, numAcc, balance, cpfClient, interestRate] = elements;
            // check if account is Savings Account
            if (typeAcc == "CP") {
                this.bank.insertAccount(new SavingsAccount(numAcc, parseFloat(balance), parseFloat(interestRate)));
            } else if(typeAcc == "CI") {    // if type account is Tax Account
                this.bank.insertAccount(new TaxAccount(numAcc, parseFloat(balance)));
            } else {
                this.bank.insertAccount(new Account(numAcc, parseFloat(balance)));
            }

            // check if account has owner
            if (cpfClient != "null") {
                const client : Client | null = this.bank.consultClient(cpfClient);
                (client != null ? this.bank.associateClientToAccount(numAcc, cpfClient) : console.log("cliente não existe"));
            }
        }

        console.log("\nDados recuperados com sucesso!");
    }

    // function to recover clients
    recoverClients() : void {
        // get all data
        const data : string = this.fileHandler.readFile("../../saves/clients.txt");

        // check if has data
        if (data.length == 0) {
            // console.log("\nSem dados Salvos...");
            return;
        }

        // saves each line as an element of an array
        const lines : Array<string> = data.split("\n");
        lines.pop();    // last line is empty

        // process lines
        for (const line of lines) {
            const elements : Array<string> = line.split(';');
            let [id, name, cpf, birthDate] = elements;
            this.bank.insertClient(new Client(name, cpf, this.getDate(birthDate)));
        }
    }

    // get all data from account
    getAllDataFromAccount(account: Account) {
        let typeAccount : string = this.getTypeAccount(account);
        let id : number = account.getId();
        let numberAccount : string = account.getNumber();
        let balance : number = account.consultBalance();
        let client : Client | null = account.getClient();
        let interestRate!: number;
        // if account is SavingsAccount, get interest Rate
        if (typeAccount == "CP") {
            interestRate = (account as SavingsAccount).getInterestRate();
        }

        return {typeAccount, id, numberAccount, balance, client, interestRate};
    } 

    // get all data from client
    getAllDataFromClient(client : Client) {
        const id: number = client.getId();
        const name: string = client.getName();
        const cpf: string = client.getCpf();
        const birthDate: Date = client.getBirthDate();
        return {id, name, cpf, birthDate};
    }

    // get type account
    private getTypeAccount(account : Account) : string {
        let type = "C";
        if (account instanceof SavingsAccount){
            type = "CP";
        }
        else if(account instanceof TaxAccount) {
            type = "CI";
        }
        return type;
    }

    // show information of the client
    showInfoClient(client: Client) : void {
        console.log("\n=== Dados do Cliente ===");
        console.log(`ID: ${client.getId()}`);
        console.log(`Nome: ${client.getName()}`);
        console.log(`CPF: ${client.getCpf()}`);
        console.log(`Data nascimento: ${this.formatDate(client.getBirthDate())}`);
    }

    // format output data to (dd/mm/yyyy)
    formatDate(date: Date) : string {
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();

        const dayStr = day < 10 ? `0${day}` : `${day}`;
        const monthStr = month < 10 ? `0${month}` : `${month}`;

        return dayStr+`/`+monthStr+`/${year}`;
    }

    // get date in formate dd/mm/aaaa
    getDate(date: string) : Date {
        const [day, month, year] = date.split("/").map( e => parseInt(e));
        const birthDate = new Date();
        birthDate.setFullYear(year, month-1, day);
        return birthDate;
    }

    // show extract account
    showExtract(numberAccount: string) : void {
        const account = this.bank.consultAccount(numberAccount);
        if(account != null) {
            const client = account.getClient();
            console.log("\n=== Extrato da Conta ===");
            console.log(`ID: ${account.getId()}`);
            console.log(`Número da conta: ${account.getNumber()}`);
            console.log(`Saldo: ${account.consultBalance().toFixed(2)}`);

            if (client != null) {
                console.log("\n=== Dados do Cliente ===");
                console.log(`ID: ${client.getId()}`);
                console.log(`Nome: ${client.getName()}`);
                console.log(`CPF: ${client.getCpf()}`);
                console.log(`Data nascimento: ${this.formatDate(client.getBirthDate())}`);
            } else {
                console.log("Cliente: Não associado.");
            }
        }
        else {
            console.log(`\nNao foi encontrada conta com o numero: ${numberAccount}`);
        }
    }
}

export default App;