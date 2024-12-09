import prompt from "prompt-sync";
import Bank from "./Bank";
import Account from "./Account";

const input = prompt();
let option = '';
const bank = new Bank();

function main() {

    const menu = `
    \nBem vindo\nDigite uma opção:\n
    Contas:\n
    1 - Inserir 2 - Consultar 3 - Sacar
    4 - Depositar 5 - Excluir 6 - Transferir
    7 – Totalizações\n
    Clientes:\n
    8 - Inserir 9 - Consultar 10 - Associar
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

// show extract account
function showExtract(numberAccount: string) : void {
    const account = bank.consultAccount(numberAccount);
    if(account != null) {
        const client = account.client;
        console.log("\n=== Extrato da Conta ===");
        console.log(`ID: ${account.id}`);
        console.log(`Número da conta: ${account.number}`);
        console.log(`Saldo: ${account.balance}`);

        if (client) {
            console.log("\n=== Dados do Cliente ===");
            console.log(`ID: ${client.id}`);
            console.log(`Nome: ${client.name}`);
            console.log(`CPF: ${client.cpf}`);
        } else {
            console.log("Cliente: Não associado.");
        }
    }
    else {
        console.log(`Nao foi encontrada conta com o numero: ${numberAccount}`);
    }
}

main();