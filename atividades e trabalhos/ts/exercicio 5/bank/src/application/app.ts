import prompt from "prompt-sync";
import App  from "../entities/App";
import Bank from "../entities/Bank";

function main() {

    const input = prompt();
    const bank = new Bank();
    const app = new App(bank);
    let option = '';

    do {
        app.showMenu();
        option = input("Opcao: ");

        switch(option) {
            case "1":
                app.insertAccount();
                break;
            case "2":
                app.consultAccount();
                break;
            case "3":
                app.withdraw();
                break;
            case "4":
                app.deposit();
                break;
            case "5":
                app.deleteAccount();
                break;
            case "6":
                app.transfer();
                break;
            case "7":
                app.totalling();
                break;
            case "8":
                app.changeAccountHolder();
                break;
            case "9":
                app.getAccountWithoutClient();
                break;
            case "10":
                app.transferToListAccount();
                break;
            case "11":
                app.earnInterest();
                break;
            case "12":
                app.insertClient();
                break;
            case "13":
                app.consultClient();
                break;
            case "14":
                app.associateClientToAccount();
                break;
            case "15":
                app.deleteClient();
                break;
            case "16":
                app.saveAccountsInFile();
                break;
        }
        input("\nOperação finalizada. Pressione <Enter> para continuar.");

    } while (option != "0");

}
main();