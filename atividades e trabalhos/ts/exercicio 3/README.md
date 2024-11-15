# Exercício 03

## __Questão 01:__ Crie uma função que recebe como parâmetro um número e retorna true se o número for par e false se for ímpar.

>```typeScript
>function main() : void {
>    console.log(isEven(6));     // out: true
>}
>
>function isEven(value : number) : boolean {
>    return value % 2 == 0;
>}
>
>main();
>```

> Link para ver o código : [clique aqui]()

## __Questão 02:__ Crie uma função que receba como parâmetros um nome e um pronome de tratamento opcional. Caso esse último não seja fornecido, deve ser considerado o valor “Sr”. Ao final, imprima uma saudação semelhante a “Sra. Sávia”.

>```typeScript
>function greeting(name: string, pronoun : string = "Sr."){
>    return pronoun + " " + name;
>}
>
>console.log(greeting("Ely"));   // Sr. Ely
>```

> Link para ver o código : [clique aqui]()

## __Questão 03:__ Crie uma função que retorne os números de um array passados por parâmetro separados por traço (-) no formato string. Para isso, use o método forEach dos arrays.

> Link para ver o código : [clique aqui]()

## __Questão 04:__ Dada a função soma abaixo, tente executar os scripts das alternativas e exiba os eventuais resultados:

```typeScript
function soma(x: number, y?: any): number {
    return x + y;
}
```

### a) console.log(soma(1, 2));
> saida: 3

### a) console.log(soma(1, "2"));
> saida: "12"

### a) console.log(soma(1));
> saida: NaN

## __Questão 05:__ Crie uma função exibir receba como parâmetro um “rest parameter” representando strings. A função deve exibir no log cada um dos elementos do “rest parameter”. Chame a função usando diferentes quantidade de parâmetros conforme abaixo:

```typeScript
exibir(“a”, “b”);
exibir(“a”, “b”, “c”);
exibir(“a”, “b”, “c”, “d”);
```

>```typeScript
>function show(...values : string[]) : void {
>    values.forEach(value => console.log(value));
>}
>```

> Link para ver o código : [clique aqui]()

## __Questão 06:__ Converta em arrow function a seguinte função:

```typeScript
function ola(): void {
    console.log("Olá");
}
```

>```typeScript
>const hello = () => console.log("Hello");
>```

> Link para ver o código : [clique aqui]()

## __Questão 07:__ Dado método filter dos arrays, crie uma implementação usando arrow function que filtre todos os elementos pares do array abaixo:

```typeScript
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
```

>```typeScript
>function getEvens(numbers : number[]) : number[] {
>    const evens : number[] = numbers.filter( number => number % 2 == 0); 
>    return evens;
>}
>```

> Link para ver o código : [clique aqui]()

## __Questão 08:__ Crie um exemplo usando a função map para dobrar os elementos de um array e reduce para totalizar a soma dos elementos do array.

> Link para ver o código : [clique aqui]()
