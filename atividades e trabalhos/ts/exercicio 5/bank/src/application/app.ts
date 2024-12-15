import prompt from "prompt-sync";
import Bank from "../entities/Bank";
import Account from "../entities/Account";
import Client from "../entities/Client";

const input = prompt();
let option = '';
const bank = new Bank();

function main() {

    const menu = `
    \nBem vindo\nDigite uma opção:\n
    Contas:\n
    1 - Inserir 2 - Consultar 3 - Sacar
    4 - Depositar 5 - Excluir 6 - Transferir
    7 – Totalizações 8 - mudar titularidade\n
    Clientes:\n
    9 - Inserir 10 - Consultar 11 - Associar
    0 - Sair\n
    `
    do {
        console.log(menu);
        option = input("Opcao: ");

        switch(option) {
            case "1":
                insertAccount();
                break;
            case "2":
                consultAccount();
                break;
            case "3":
                withdraw();
                break;
            case "4":
                deposit();
                break;
            case "5":
                deleteAccount();
                break;
            case "6":
                transfer();
                break;
            case "7":
                totalling();
                break;
            case "8":
                changeAccountHolder();
                break;
            case "9":
                insertClient();
                break;
            case "10":
                consultClient();
                break;
            case "11":
                associateClientToAccount();
                break;
        }
        input("\nOperação finalizada. Pressione <Enter> para continuar.");

    } while (option != "0");

    
}

// 1 - insert account
function insertAccount(): void {
    console.log("\nCadastrar conta\n");
    let account: Account;
    let numberAccount: string = input('Digite o número da conta:');
    const initialBalance = parseFloat(input("Saldo inicial: R$ "));
    bank.insertAccount(new Account(numberAccount, initialBalance));
    console.log("\nConta cadastrada com sucesso!");
}

// 2 - consult account
function consultAccount() : void {
    console.log("\nConsultar conta\n");
    const numberAccount: string = input("Digite o numero da conta: ");
    showExtract(numberAccount);
}

// 3 - withdraw
function withdraw() : void {
    console.log("Realziar saque:");
    const numberAccount = input("Numero da conta: ");
    const amount = parseFloat(input("Valor a sacar: "));
    if (bank.withDraw(numberAccount, amount)) {
        console.log("\nSaque efetuado com sucesso!");
        showExtract(numberAccount);
        return
    }

    console.log("\nFalha ao efetuar saque");
}

// 4 - deposit
function deposit() : void {
    console.log("Realziar deposito:");
    const numberAccount = input("Numero da conta: ");
    const amount = parseFloat(input("Valor a depositar: "));
    if (bank.deposit(numberAccount, amount)) {
        console.log("\nSaque efetuado com sucesso!");
        showExtract(numberAccount);
        return
    }

    console.log("\nFalha ao efetuar deposito");
}

// 5 - delete
function deleteAccount() : void {
    console.log("Deletar conta:");
    const numberAccount = input("Numero da conta: ");

    if (bank.delete(numberAccount)) {
        console.log("\nConta deletada com sucesso");
        return;
    }

    console.log("\nFalha ao excluir conta");
}

// 6 - transfer
function transfer() : void {
    console.log("Tranferir dinheiro:");
    const numberAccountTarget = input("numero de sua conta: ");
    const numberAccountDestiny = input("numero conta destino: ")
    const value = parseFloat(input("valor a ser tranferido: R$ "));

    if (bank.transfer(numberAccountTarget, numberAccountDestiny, value)) {
        console.log("\ndinheiro tranferido com sucesso!");
        showExtract(numberAccountTarget);
        showExtract(numberAccountDestiny);
        return;
    }

    console.log(`\nFalha ao tranferir da conta: ${numberAccountTarget} para conta: ${numberAccountDestiny}`);
}

// 7 - totalling
function totalling() : void {
    console.log("\nTotalziacao:");
    const total = bank.totalBalance();
    console.log(`\nTotal R$ ${total.toFixed(2)}\n`);
}

// 8 - change account holder
function changeAccountHolder() : void {
    console.log("\nMudar titular de uma conta\n");

    const numberAccount = input("numero da conta: ");
    const cpfNewHolder = input("cpf novo titular: ");

    if (bank.changeAccountHolder(numberAccount, cpfNewHolder)) {
        showExtract(numberAccount);
        console.log("\ntitular alterado com sucesso");
        return;
    }

    console.log("\nFalha ao mudar titular da conta!");
}

// 9 - insert client in bank
function insertClient() : void {
    console.log("\nInserir cliente:\n");
    const name = input("informe seu nome: ");
    const cpf = input("informe seu cpf: ");
    const birthDate : Date = getDate(input("data nascimento (dd/mm/aaa): "));
    const client = new Client(name, cpf, birthDate);
    if (bank.insertClient(client)) {
        console.log("\nConta adicionada com sucesso!");
        return;
    }

    console.log("\nFalha ao adicionar cliente");
}

// 10 - consult client
function consultClient() : void {
    console.log("\nConsultar cliente:\n");
    const cpf = input("informe o cpf: ");
    const client = bank.consultClient(cpf);

    if (client != null) {
        showInfoClient(client);
        return;
    }

    console.log(`\nNao foi encontrado aluno de cpf ${cpf}`);
}

// 11 - associate client to acocunt
function associateClientToAccount() : void {
    console.log("\nAssociar conta a cliente\n");
    const numberAccount = input("numero da conta: ");
    const cpfClient = input("cpf cliente: ");

    if (bank.associateClientToAccount(numberAccount, cpfClient)) {
        console.log("\nAssociacao entre conta e cliente feita com sucesso!");
        return;
    }

    console.log("\nFalha ao associar conta com o cliente");
}

// show information of the client
function showInfoClient(client: Client) : void {
    console.log("\n=== Dados do Cliente ===");
    console.log(`ID: ${client.id}`);
    console.log(`Nome: ${client.name}`);
    console.log(`CPF: ${client.cpf}`);
    console.log(`Data nascimento: ${formatDate(client.birthDate)}`);
}

// format output data to (dd/mm/yyyy)
function formatDate(date: Date) : string {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    const dayStr = day < 10 ? `0${day}` : `${day}`;
    const monthStr = month < 10 ? `0${month}` : `${month}`;

    return dayStr+`/`+monthStr+`/${year}`;
}

// get date in formate dd/mm/aaaa
function getDate(date: string) : Date {
    const [day, month, year] = date.split("/").map( e => parseInt(e));
    const birthDate = new Date();
    birthDate.setFullYear(year, month-1, day);
    return birthDate;
}

// show extract account
function showExtract(numberAccount: string) : void {
    const account = bank.consultAccount(numberAccount);
    if(account != null) {
        const client = account.client;
        console.log("\n=== Extrato da Conta ===");
        console.log(`ID: ${account.id}`);
        console.log(`Número da conta: ${account.number}`);
        console.log(`Saldo: ${account.balance}`);

        if (client != null) {
            console.log("\n=== Dados do Cliente ===");
            console.log(`ID: ${client.id}`);
            console.log(`Nome: ${client.name}`);
            console.log(`CPF: ${client.cpf}`);
            console.log(`Data nascimento: ${formatDate(client.birthDate)}`);
        } else {
            console.log("Cliente: Não associado.");
        }
    }
    else {
        console.log(`\nNao foi encontrada conta com o numero: ${numberAccount}`);
    }
}

main();