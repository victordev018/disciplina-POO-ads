package code.src.first_class.entities;

public class BankAccount {

    private int id;
    private String cpf;
    private Double balance;

    public BankAccount(){
    }

    public BankAccount(int id, String cpf, Double balance){
        this.id = id;
        this.cpf = cpf;
        this.balance = balance;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Double getBalance() {
        return balance;
    }

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public void deposit(Double amount){
        this.balance += amount;
    }

    public void withdraw(Double amount){
        this.balance -= amount;
    }

    public void showDetails(String message){
        System.out.println(message);
        System.out.println("\n| cfp: " + cpf + "\n| balance: R$ " + String.format("%.2f", balance));
    }
}
