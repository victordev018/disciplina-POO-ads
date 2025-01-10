import { Calculator } from "./questao02";

class ScientificCalculator extends Calculator {

    constructor(numberOne: number, numberTwo: number) {
        super(numberOne, numberTwo);
    }

    // method to exponentiate
    public exponentiate() : number {
        return Math.pow(this.numberOne, this.numberTwo);
    }
}

function main() {

    const scientificCalc = new ScientificCalculator(10, 2);
    console.log("sum: ", scientificCalc.sum());
    console.log("exponentiation: ", scientificCalc.exponentiate());

}

main();

/*
    RESPOSTA DA QUESTAO 03 - C:
    
    Foi preciso alterar o modificador de acesso dos atriubutos da classe Calculadora
    de 'private' para 'protected', pois quando está como private o escopo dos atributos
    fica limitado para a classe Calculadora, alterando para protected permitimos que as
    demais classes que extendem de de Calculadorea possam acessar seus atributos.

*/