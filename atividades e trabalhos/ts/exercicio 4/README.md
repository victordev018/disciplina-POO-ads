# Exercicio extra 04:

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