# Exercício 02

## __Questão 01:__ Qual a diferença entre tipagem dinâmica e tipagem estática?

> Tipagem `dinâmica` permite que uma mesma variável aceite valores de outros tipos 
> em tempo de execução, já a tipagem `estática` o tipo de uma variável uma vez
> definido não pode ser alterado.

## __Questão 02:__ Qual o principal problema do uso de tipagem dinâmica?

> Possibilidade de erros em tempo de execução, ocasionando em erros ou comportamentos não esperados.

## __Questão 03:__ Pesquise um exemplo na internet em que a tipagem dinâmica pode ser problemático.

```python
x = 5  # x é um inteiro
x = "Hello"  # Agora x é uma string
print(x + 10)  # Isso gerará um erro, porque estamos tentando somar uma string a um número
```

## __Questão 04:__ Pesquise e exemplifique com um exemplo porque dizemos que a linguagem C, mesmo tendo tipagem estática, possui tipagem fraca.

>```C
>int a = 5;
>void* ptr = (void*) &a;  // Conversão direta de um ponteiro para void
>```

> Aqui, o tipo do ponteiro é alterado sem qualquer verificação de que isso pode ou não ser seguro para a operação.

## __Questão 05:__ Poderíamos dizer que a tipagem do TypeScript é fraca por uma variável do tipo number aceitar tanto inteiros como ponto flutuante?

> Não, pois a tipagem fraca ocorre quando a linguagem permite que diferentes tipos possam ser colocados em uma mesma
> variável, como pegar um texto, tipo string, e colocar em uma variável que anteriormente foi iniciada com um número.
> No TypeScript isso não acontece, se o programador tentar colocar uma string em uma variável do tipo number, logo
> será avisado pelo compilador que esta operaçõa não é permitida.

## __Questão 06:__ Reescreva o exemplo abaixo, mantendo a quebra de linhas usando template strings e os valores Ely, 120.56 e TypeScript venham de variáveis declaradas separadamente e “interpoladas” na string:

Ely
My payment time is 120.56
and
my preffered language is TypeScript

> Link do código: [clique aqui](https://github.com/victordev018/POO-discipline-ads/blob/main/atividades%20e%20trabalhos/ts/exercicio%202/Teacher.ts)

## __Questão 07:__ Pesquise e configure o seu arquivo de configuração do TypeScript com as opções abaixo. Faça testes com as mudanças e perceba a diferença após a configuração.

* Alterar o local em que os arquivos *.js são gerados para a pasta build;
* allowUnreachableCode com valor true;
https://www.typescriptlang.org/pt/tsconfig#allowUnreachableCode
* noImplicitAny com valor true
https://www.typescriptlang.org/pt/tsconfig#noImplicitAny
* target com o valor ES3. Além disso, utilize a classe do exercício anterior e
veja como ela é transpilada para JS;
* strictNullChecks para true e crie um exemplo que mostre a restrição;
* Configure um projeto seu para que seja possível realizar depuração
alterando o atributo sourceMap .

> Link para o arquivo `tsconfig.json`: [clique aqui](https://github.com/victordev018/POO-discipline-ads/blob/main/atividades%20e%20trabalhos/ts/tsconfig.json)