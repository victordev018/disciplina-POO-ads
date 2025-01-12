# Exercicio 07 - herança

## Questão 01: As classes Carro, Veiculo e CarroEletrico são bem semelhantes. Reescreva as classes usando herança para que os atributos duplicados não sejam mais necessários.

> link do codigo: [clique aqui](https://github.com/victordev018/disciplina-POO-ads/blob/main/atividades%20e%20trabalhos/ts/exercicio%207/src/questao01.ts)

## Questão 02: Crie uma classe Calculadora com:

- Dois tributos privados chamados representando dois operandos;
- Crie um construtor que inicializa os atributos;
- Crie um método que retorna a soma dos dois atributos;
- Teste a classe.

> link do codigo: [clique aqui](https://github.com/victordev018/disciplina-POO-ads/blob/main/atividades%20e%20trabalhos/ts/exercicio%207/src/questao02.ts)

## Questão 03: Crie uma classe chamada CalculadoraCientifica que herda da classe Calculadora do exercício passado e:

- Implemente um método chamado exponenciar que retorne o primeiro operando elevado ao segundo;
- Teste a classe;

> link do codigo: [clique aqui](https://github.com/victordev018/disciplina-POO-ads/blob/main/atividades%20e%20trabalhos/ts/exercicio%207/src/questao03.ts)

### Foi necessária alguma modificação em Calculadora para o acesso aos atributos?

> Foi preciso alterar o modificador de acesso dos atriubutos da classe Calculadora
> de 'private' para 'protected', pois quando está como private o escopo dos atributos
> fica limitado para a classe Calculadora, alterando para protected permitimos que as
> demais classes que extendem de de Calculadorea possam acessar seus atributos.

## Questão 04: Considerando a implementação da aplicação bancária, implemente:
## a - Implemente na classe Banco o método renderJuros(numero: string): void, onde: 

- É passado por parâmetro o número de uma poupança e feita uma consulta para ver se a conta existe. Note que a consulta não se altera sendo Conta ou Poupança;
- Caso a poupança seja encontrada, teste se realmente se trata de uma poupança com o operador instanceof, desconsidere a operação caso contrário;
- Caso seja, faça um cast e invoque o método renderJuros da própria instância encontrada;
- Teste o método da classe Banco passando tanto um número de poupança como de conta passados inseridos anteriormente;
- Altere a aplicação anteriormente sugerida para ter a opção de menu “Render Juros”

```typescript
    earnInterest(numberAccount : string) : boolean {
        const accountSearched: Account | null = this.consultAccount(numberAccount);

        if (accountSearched != null && accountSearched instanceof SavingsAccount) {
            accountSearched.earnInterest();
            return true;
        }

        return false;
    }
```

> link da aplicação completa: [clique aqui](https://github.com/victordev018/disciplina-POO-ads/tree/main/atividades%20e%20trabalhos/ts/exercicio%205/bank)
