import Account from "../exercicio 5/bank/src/entities/Account";
import Bank from "../exercicio 5/bank/src/entities/Bank";

function main() {

    const bank: Bank = new Bank();
    const c1 : Account = new Account("111-1", 0);
    const c2 : Account = new Account("222-2", 10);
    bank.transfer("111-1", "222-2", 100);
}

/* Ao lançar uma exceção e não tratá-la, ela continuará sendo propagada para métodos superiores na pilha de chamadas.
    Sendo assim, a confiabilidade dessa aplicação ainda não está ideal, pois, sem tratamento adequado em nenhuma camada,
    o mecanismo padrão utilizado para lidar com o erro é abortar o programa, o que não é uma abordagem adequada.
    Em um design robusto, é essencial implementar estratégias de tratamento de exceções em diferentes camadas da aplicação e garantir
    que a aplicação continue em funcionamento.
*/

main();