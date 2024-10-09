package code.src.first_class.application;

import code.src.first_class.entities.BankAccount;

public class Program {

    public static void main(String[] args) {

        BankAccount account = new BankAccount(23, "111.222.333-44", 2900.0);

        account.showDetails("\n> Data before deposit: ");

        // deposit
        account.deposit(5000.0);

        account.showDetails("\n> Data after deposit: ");

        // withdraw
        account.withdraw(350.0);

        account.showDetails("\n> Data after withdraw: ");
    }
}
