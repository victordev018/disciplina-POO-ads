# Exercicio 07 (parte 2):

## __4 - b)__ Adicione a aplicação a possibilidade de ter o cadastro de ContaImposto feita em sala de aula. Foi necessário alterar alguma coisa na classe Banco ou apenas na classe App?

> A alteração ocorreu somente na classe App, ja que ela que opera os métodos de insercão de novas contas e com o acréscimo
> de um novo tipo de conta foi necessário fazer ajustes nesse método para o usuário conseguir criar sua conta do tipo Imposto.

## __4 - c)__ Incremente a implementação da aplicação para recuperar de um arquivo texto para o array contas salvas em um arquivo contas.txt com um formato semelhante ao abaixo:
```txt
    C;111-1;40.00;1;Ely
    CP;222-2;10.65;0.5;2;Maria
    CI;333-3;2.00;0.38;3;Pedro
    CP;444-4;140;0.5;4;Amanda
```
### Onde os campos separados por ponto-e-vírgula são o número, o saldo, o tipo da conta e, no caso de conta imposto e conta poupança, a taxa de desconto e taxa de juros. Pesquise uma biblioteca de leitura e escrita de arquivos e deixe essa e a próxima opção disponíveis para o usuário escolher

> Implementei e deixei disponível as opções de de salvar e recuperar os dados tanto de contas quanto de clientes, utilizei das funções `WriteFileSync()` e
> `ReadFileSync()` para poder trabalhar com a gravação e leitura de dados. Criei uma classe chamada `FileHandler` para poder manipular essas operações com
> arquivos.

> link para classe: [clique aqui](https://github.com/victordev018/disciplina-POO-ads/blob/main/atividades%20e%20trabalhos/ts/exercicio%205/bank/src/entities/FileHandler.ts)

## __4 - d)__ Implemente também uma funcionalidade de gravar no mesmo arquivo o conteúdo do array de contas:

> A implementação está disponível no projeto da aplicação do banco: [projeto banco](https://github.com/victordev018/disciplina-POO-ads/tree/main/atividades%20e%20trabalhos/ts/exercicio%205/bank)

## Pense e adicione outro tipo de conta com pelo menos um novo atributo e um novo método. Exponha esse novo comportamento na classe Banco (se necessário) e no menu da classe App.

> Criei uma classe que representa uma `conta de ivestimento` que extende de Conta, como novo atributo ela posusi a `taxa rendimento` do tipo number e de
> método ela possui o de `aplicar rendimento`.

> link para acessar a classe: [clique aqui](https://github.com/victordev018/disciplina-POO-ads/blob/main/atividades%20e%20trabalhos/ts/exercicio%205/bank/src/entities/InvestmentAccount.ts)

## __5.__ Suponha um sistema de controle de estoque de produtos e implemente:

- Duas classes: Produto e ProdutoPerecivel;
- A classe Produto tem atributos privados representando identificador, descrição, quantidade de produtos em estoque e valor unitário;
- ProdutoPerecivel tem as mesmas características de Produto, porém possui a mais um atributo representando a data da validade (https://www.javatpoint.com/typescript-date-object). Use herança;
- Produto possui dois métodos para repor e dar baixa. A e ambos somam e subtraem respectivamente uma quatidade passada por parâmetro doatributo quantidade;
- Um produto perecível possui um método que diz se um produto está válido ou não comparando sua data de validade com a data atual;
- Use sobrescrita, ou seja, reescreva os métodos repor e dar baixa para que não seja possível executar a ação caso o produto não esteja na validade;
- Crie uma classe chamada Estoque que possui um atributo privado representando um array de produtos (Produto ou ProdutoPerecivel);
- Implemente métodos para inserir, consultar pelo atributo id, excluir, repor e dar baixa nos produtos na classe estoque;
- Crie validações para não deixar serem incluídos produtos com mesmo id ou mesma descrição. Para isso, crie uma consulta adicional através de um método existe(id: number, descricao: string boolean e use-o no método incluir.
- Os métodos repor e dar baixa na classe estoque chamam os métodos da classe produto finalmente alterar a quantidade;
- Os vários métodos da classe devem levar em conta se o produto existe, para isso, use o método existe ou consultar;
- Implemente um método que liste todos os produtos perecíveis vencidos.

> link para o projeto completo: [projeto sistema controle estoque](https://github.com/victordev018/disciplina-POO-ads/tree/main/atividades%20e%20trabalhos/ts/exercicio%207-p2/stock%20control)