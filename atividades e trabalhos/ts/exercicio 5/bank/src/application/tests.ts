import Account from "../entities/Account";
import Client from "../entities/Client";
import Bank from "../entities/Bank";

function main() : void {

    // instance Bank
    const bank = new Bank();

    // insert four accounts in Bank
    bank.insertAccount(new Account("100-1", 0));
    bank.insertAccount(new Account("100-2", 200));
    bank.insertAccount(new Account("100-3", 1400));
    bank.insertAccount(new Account("100-4", 58));

    // insert two Clients
    bank.insertClient(new Client(1, "John", "102.192.203-22", new Date()));
    bank.insertClient(new Client(2, "Marcel", "123.027.371-11", new Date()));

    // associate accounts
    bank.associateClientToAccount("100-3", "102.192.203-22");   // john
    bank.associateClientToAccount("100-1", "102.192.203-22");   // john
    bank.associateClientToAccount("100-2", "123.027.371-11");   // marcel
    bank.associateClientToAccount("100-4", "123.027.371-11");   // marcel

    // consult total balance of the clients
    const balanceJohn = bank.totalClientBalance("102.192.203-22"); 
    const balanceMarcel = bank.totalClientBalance("123.027.371-11"); 
    console.log("\nTotal balance John: $ "+ balanceJohn);
    console.log("\nTotal balance Marcel: $ "+ balanceMarcel+"\n");

    // lists accounts
    const listAccountJohn = bank.listAccountsFromClient("102.192.203-22");
    const listAccountMarcel = bank.listAccountsFromClient("123.027.371-11");

    console.log("\nList account John: ", listAccountJohn);
    console.log("\nList account Marcel: ", listAccountMarcel);

    // trying to insert existing Client and Account
    bank.insertClient(new Client(1, "John", "102.192.203-22", new Date()));     // error: client already exists
    bank.insertAccount(new Account("100-1", 0));                             // error: account already exists

}

main();