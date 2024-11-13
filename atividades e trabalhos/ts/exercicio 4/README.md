# Exercicio 04:

## __Questão 01:__ Assinale verdadeiro ou falso:

>( F ) Objetos são modelos para classes; <br>
>( V ) Atributos de uma classe devem ser obrigatoriamente inicializados para que as classes compilem; <br>
>( F ) Uma variável declarada dentro de um método deve ser inicializada para que a classe seja compilável; <br>
>( V ) Uma variável que seja uma classe declarada em um método é automaticamente inicializada com undefined; <br>
>( V ) Construtores são rotinas especiais que servem para inicializar e configurar os objetos no momento da instanciação; <br>
>( V ) Construtores não possuem tipo de retorno e podem ou não ter parâmetros; <br>
>( V ) Uma classe pode ter várias instâncias.

## __Questão 02:__ Suponha uma classe Hotel que sirva apenas para guardar a quantidade de solicitações de reservas feitas conforme abaixo:

```typeScript
class Hotel {

    quantReservas : number;

    adicionarReserva() : void {
        this.quantReservas++;
    }
}
```

## Podemos afirmar que haverá um problema de compilação, pois a variável inteira não foi inicializada previamente? Justifique.

> Sim, por a variável não ter sido inicializada seu valor por padrão será `undefined`, e o compilador não deixarar seguir a
> compilação com atributos não inicializados, além disso, o método `adicionarReserva()` não iria funcionar corretamente, pois
> para conseguir incrementar o valor ele teria que estar com um valor numérico ao invés de undefined.

## __Questão 03:__ 3. Ainda sobre a classe do exemplo anterior, considere o código abaixo:

```typeScript
let hotel : Hotel = new Hotel(2);
console.log(hotel.quantReservas);
```

## Adicione o construtor que aceite um parâmetro inteiro e faça a inicialização do atributo quantReservas.

>```typeScript
>class Hotel {
>
>    quantityReservations : number;
>
>    constructor(quantityReservations: number){
>        this.quantityReservations = quantityReservations;
>    }
>
>    addReservation() : void {
>        this.quantityReservations++;
>    }
>
>}
>```

> link do codigo: [clique aqui](https://github.com/victordev018/POO-discipline-ads/blob/main/atividades%20e%20trabalhos/ts/exercicio%204/Hotel.ts)

## __Questão 04:__ Considere a classe Radio e as instruções que fazem seu uso abaixo:

```typeScript
class Radio {
    volume : number;
    constructor(volume : number) {
        this.volume = volume;
    }
}

let r : Radio = new Radio();
r.volume = 10;
```

## Justifique o erro de compilação e proponha uma solução.

> O erro ocorre porque na linha 8 é criada uma instância da classe Car, um objeto, porém da maneira como
> está sendo feito, causará um erro de compilação, pois o construtor da classe exige que passe um valor
> numérico como parâmtro, mas não é o que acontece neste eemplo.
> A soulção seria passar um valor para o construtor na linha 8, como no código abaixo:

>```typeScript
>class Radio {
>    volume : number;
>    constructor(volume : number) {
>        this.volume = volume;
>    }
>}
>
>let r : Radio = new Radio(8);
>r.volume = 10;
>```

## __Questão 05:__ Considerando o uso da classe Conta apresentada em aula e seu uso abaixo:

```typeScript
    let c1: Conta = new Conta("1",100);
    let c2: Conta = new Conta("2",100);
    let c3: Conta;
    c1 = c2;
    c3 = c1;
    c1.sacar(10);
    c1.transferir(c2,50);
    console.log(c1.consultarSaldo());
    console.log(c2.consultarSaldo());
    console.log(c3.consultarSaldo());
```

## a) Qual o resultado dos dois "prints"? Justifique sua resposta.

> O resultado de cada um dos prints será '90', pois cada uma das variáveis apontam para a o mesmo
> objeto e este objeto após as operações de saque e transferência fica com valor 90 de saldo.

## b) O que acontece com o objeto para o qual a referência c1 apontava?

> o coletor de lixo (garbage collector) vai eventualmente remover o objeto para qula c1 apontava da
> memória, pois ele se torna inacessível.

## __Questão 06:__ Crie uma classe chamada Saudacao que:
- Contenha um atributo chamado texto e outro chamado destinatario, ambos String;
- Crie um construtor que inicializa os dois atributos;
- Crie um método obterSaudacao() que retorne a concatenação dos dois atributos. Ex: "Bom dia, João";
- Instancie uma classe Saudacao e teste seu método obterSaudacao().

> Link do código: [clique aqui](https://github.com/victordev018/POO-discipline-ads/blob/main/atividades%20e%20trabalhos/ts/exercicio%204/Greeting.ts)

## __Questão 07:__ Crie uma classe chamada Triangulo que:

- Possua 3 atributos inteiros representando os lados;
- Crie um método que retorna true se os lados formarem um triângulo de acordo com a regra: |b-c| < a < b+c;
- Crie 3 métodos: ehIsoceles(), ehEquilatero() e ehEscaleno() que retorne
verdadeiro caso o triângulo seja um dos tipos relacionados ao nome do
método. Eles devem chamar antes de tudo, o método da questão b. e
retornar false se esse método já retornar false também;
- Instancie classes Triangulo de diferentes lados e seus métodos.

> Link do código: [clique aqui](https://github.com/victordev018/POO-discipline-ads/blob/main/atividades%20e%20trabalhos/ts/exercicio%204/Triangle.ts)

## __Questão 08:__ Uma classe Equipamento com:

- um atributo ligado (tipo boolean)
- dois métodos liga() e desliga(). O método liga torna o atributo ligado true e
o método desliga torna o atributo ligado false.
- Crie um método chamado inverte(), que muda o status atual (se ligado,
desliga...se desligado, liga)
- Crie um método que estaLigado() que retorna o valor do atributo ligado
- Altere o comportamento do método ligar() para caso o equipamento já
esteja ligado, não ligue novamente. Faça o mesmo com o método
desligar().
- Instancie uma classe Equipamento e teste todos os seus métodos.

> Link do código: [clique aqui](https://github.com/victordev018/POO-discipline-ads/blob/main/atividades%20e%20trabalhos/ts/exercicio%204/Equipment.ts)

## __Questão 09:__ Altere a classe conta dos slides conforme as instruções abaixo:

- Altere o método sacar de forma que ele retorne verdadeiro ou falso. Caso o
saque deixe saldo negativo, o mesmo não será realizado, retornando falso;
- Altere o método transferir() para que retorne também um valor lógico e que
não seja feita a transferência caso o sacar() na conta origem não seja
satisfeito;
- Verifique as diferentes operações implementadas.

> Link do código: [clique aqui](https://github.com/victordev018/POO-discipline-ads/blob/main/atividades%20e%20trabalhos/ts/exercicio%204/contaBancaria.ts)

## __Questão 10:__ Crie uma classe chamada Jogador e nela:

- Crie 3 atributos inteiros representando força, nível e pontos atuais;
- Crie um construtor no qual os 3 parâmetros são passados e inicialize os
respectivos atributos;
- Crie um método chamado calcularAtaque. Nele, calcule e retorne o valor da
multiplicação de força pelo nível. Esse resultado é o dano de ataque do
jogador;
- Crie um método chamado atacar em que é passado um outro jogador
(atacado) como parâmetro. Nele e é feita a subtração do dano (método
calcularAtaque) dos pontos do atacado;
- Crie um método chamado estaVivo que retorna true caso o atributo pontos
do jogador seja maior que zero e falso caso contrário.
- Altere o método atacar para usar o método está vivo e desconsiderar a
operação, ou seja, não atacar, caso o jogador passado por parâmetro não
esteja vivo.
- Crie um método chamado toString() que retorna a representação textual do
jogador concatenando todos os seus atributos.
- Avalie em com testes dois jogadores instanciados e inicializados através do
construtor. Utilize o método de ataque de cada jogador e ao final, verifique
qual jogador tem mais pontos.

> Link do código: [clique aqui](https://github.com/victordev018/POO-discipline-ads/blob/main/atividades%20e%20trabalhos/ts/exercicio%204/Player.ts)


## __Questão 11:__ A abordagem da questão 9 é retornar códigos de erro ou acerto. Já a da questão 10 é desconsiderar a alteração. Quais das duas você acha mais correta? Compare com seus códigos escritos em outras disciplinas.

> Para que o usuário tenha mais feedback controle sobre o status de suas operações, o mais apropriado seria a abordagem da questão 9
> pois quando uma operação falhar, seja por alguma regra de negócio ou qualquer outro motivo, o usuário tenha ciência do ocorrido
> e isso facilita seu entendimento e o ajuda a decidir as próximas operações a serem executadas.