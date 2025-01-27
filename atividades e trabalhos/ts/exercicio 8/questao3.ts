import Account from "../exercicio 5/bank/src/entities/Account";

function main() {

    const c1 : Account = new Account("111-1", 0);
    const c2 : Account = new Account("222-2", 10);

    c1.transfer(c2, 100);
}

/* O método transfer() utiliza o método withdraw() e a conta de origem não possui saldo suficiente para realizar o saque,
    o método sacar lança uma exceção. Como essa exceção não está sendo tratada no método transferir,
    ela se propaga para o método que chamou transferir, que, no caso, é o método main. Por não ser tratada na main, o programa
    é abortado.
*/

main();