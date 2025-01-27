# Excercício 8 - parte 1

### __Questão 01:__ Enumere os 3 tipos mais comuns de tratamento de erros e exemplifique com códigos seus ou pesquisados na internet.

> Retornar um valor de erro:
>```java
>    double depositar(double valor) {
>        if (valor > 0) {
>            this.saldo += valor;
>            return this.saldo;
>        } else {
>            return -1;  // Retorna -1 para indicar erro
>        }
>    }
>```

> Usar uma variável de status:
>```java
>    boolean depositar(double valor) {
>        if (valor > 0) {
>            this.saldo += valor;
>            return true;  // Operação bem-sucedida
>        } else {
>            return false;  // Operação falhou
>        }
>    }
>```

> Registrar o erro em um log:
>```java
>    void depositar(double valor) {
>        if (valor > 0) {
>            this.saldo += valor;
>        } else {
>            System.out.println("Erro ao realizar depósito: valor negativo.");
>        }
>    }
>```

### __Questão 02:__ Explique por que cada um dos 3 métodos acima possui limitações de uso.

> Sobre `retornar um valor de erro`: Pode causar ambiguidade se o valor de erro puder ser um resultado válido. Requer verificações constantes e não fornece detalhes do erro.
> Sobre `usar uma variável de status`: Aumenta a complexidade com verificações constantes. Informação limitada sobre o erro e difícil de propagar em operações complexas.
> Sobre `registrar o erro em um log`: Erro pode não ser visível imediatamente, criando sobrecarga de logs. Pode introduzir problemas de desempenho e sincronização.

### __Questão 03:__ Com o código repassado, crie duas contas e teste o método transferir de modo que a conta a ser debitada não possua saldo suficiente. Explique o que ocorreu.

> link do código + explicação: [clique aqui](https://github.com/victordev018/disciplina-POO-ads/blob/main/atividades%20e%20trabalhos/ts/exercicio%208/questao3.ts)

### __Questão 04:__ Instancie uma classe App e, caso necessário, crie duas contas. Acesse a opção de transferir com valor alto o suficiente para lançar uma exceção/erro. Verifique que o lançamento da exceção foi “propagado” para o método conta.transferir(), banco.transferir() e App.menu()? Como você avalia a confiabilidade dessa implementação.

> link do código + explicação: [clique aqui](https://github.com/victordev018/disciplina-POO-ads/blob/main/atividades%20e%20trabalhos/ts/exercicio%208/questao4.ts)

### __Questão 05:__ Crie um método chamado validaValor(valor) na que lance um erro caso o valor repassado seja menor ou igual a zero ou em formato inválido. Chame o método no construtor da classe conta para validar o saldo inicial. Chame o método também nos métodos sacar e depositar. Reexecute a classe App e chame as opções de menu que aceitam valores referentes a saldo, débito, crédito e transferir. Avalie o tratamento do erro.

> código da função responsável por validar o valor e lançar a exceção:
>```java
>    private validateValue(value: number) {
>            if (value <= 0) throw new Error("Invalid value, must be greater than zero");
>    }
>```

> link para a classe Account com construtor e métodos atualizdos: [clique aqui](https://github.com/victordev018/disciplina-POO-ads/blob/main/atividades%20e%20trabalhos/ts/exercicio%205/bank/src/entities/Account.ts)