# Exercício 1 - classes e abstrações

## __Questão 01:__ Explique com suas palavras a diferença entre uma classe e um objeto e como  esses dois conceitos se relacionam.
>Classes é o que chamamos de modelo/entidade, que representa algum aspecto do mundo real, são nas classes que definimos quais 
>atributos/características daquela determinada entidade serão importantes para compor a classe, além definir as características 
>a classe nos permite definir comportamentos para a entidade. Já o objeto seria uma instânia da classe, ou melhor dizendo, seria
>uma concretização daquele modelo pré definido.

>Um exemplo para tal relação, entre classe o objeto, poderíamos ter uma classe Livro, com título, autor, editora, ano de publicação, 
>gênero e preço, enquanto como objeto podemos ter como exemplo o livro Clean Code: O Guia do Desenvolvedor para software de Alta
>Qualidade.


    

## __Questão 02:__ Conceito de atributos e métodos:
>De forma resumida, os atributos define as características de uma determinada entidade enquanto os métodos definem 
>os comportamentos daquela entidade.

    Ex:
    Uma classe Produto teria como atributos as seguintes características:
	- código do produto;
	- nome;
	- descrição;
    - preço;
	- quantidade em estoque;
    - categoria;
    - marca.

    possuiria os seguintes comportamentos:
    - adicionar estoque;
    - remover estoque;
    - atualizar preço;
    - verificar disponibilidade.

    Exemplo de objeto da classe Produto:
    Produto: Notebook Dell
    - código: 67890
    - nome: Notebook Dell Inspiron 15
    - descrição: Notebook com tela 15,6", processador Intel Core i5 e 8GB de RAM
    - preço: R$ 2.800,00
    - quantidade estoque: 20
    - categoria: Informática
    - marca: Dell

## __Questão 03:__ A abstração visa focar no que é importante para um sistema. Você concorda que  um atributo de uma pessoa pode ser importante ou não dependendo do contexto  do sistema? Enumere na tabela abaixo contextos/sistemas distintos em que os atributos abaixo seriam relevantes:


| Atributo           |          sistema em que não é importante           |      sistema em que é moderadamente importante | sistema em que é essencial                                 |
| ------------------ | :------------------------------------------------: | ---------------------------------------------: | ---------------------------------------------------------- |
| cpf                |     gerenciamento de gerenciamento de estoque      |                              sistema e-comerce | sistema bancário                                           |
| histórico de saúde |          sistema gerenciamento de estoque          |              sistema de uma academia de treino | sistema clínica médica                                     |
| seguidores         |                  sistema bancário                  |                         sistema de rede social | sistema de marketing de influenciadores digitais           |
| habilidade destra  |   sistema de gerenciar estoque de loja de roupas   | sistema de treinamento de eportes competivivos | sistema de seleção de jogadores para um equipe de esportes |
| endereço           |        gerenciamento de conteúdo de um blog        |                           sistema de e-comerce | sistema de entrega de comida a domicílio                   |
| saldo em conta     |                    rede social                     |                           sistema de e-comerce | sistema bancário                                           |
| etnia              | sistema de gerenciamento de estoque de um comércio |                       sistema de saúde pública | sistema de pesquisa genética                               |

## __Questão 04:__ Considerando os objetos pessoa e conta:

### __a)__ Seria interessante em um sistema bancário um objeto "conta" possuir uma  "pessoa" como um atributo interno representando o titular da conta?
>Sim, sabemos que toda conta criada possuí um titular, logo é interessante e essencial que o objeto conta carregue
>em si a informação de seu titular, que no caso, seria o objeto pessoa.
### __b)__ Olhando no sentido inverso, seria interessante uma pessoa possuir mais de  uma conta como atributo? Que elemento da programação estruturada melhor  representaria o conjunto de contas de uma pessoa? 
>Sim, sabemos que uma pessoa pode possuir mais de uma conta bancária em diferentes bancos, uma das formas de representar
>este conjunto de contas que a pessoa pode possuir, seria armazena-los em um array, que é utilizado para armazenar um 
>conjunto da dados.

## __Questão 05:__ Identifique pelo menos 5 objetos de um sistema de controle acadêmico.

    1. Aluno

    Atributos:
    - Matrícula;
    - Nome;
    - Data de Nascimento;
    - Endereço;
    - Curso.

    Comportamentos:
    - Matricular Disciplina;
    - Cancelar Matrícula;
    - Obter Histórico Acadêmico.

    2. Disciplina

    Atributos:
    - Código;
    - Nome;
    - Créditos;
    - Período.

    Comportamentos:
    - Adicionar Aluno;
    - Remover Aluno;
    - Obter Notas.

    3. Curso

    Atributos:
    - Código;
    - Nome;
    - Duração;
    - Área.

    - Comportamentos:
    - Adicionar Disciplina;
    - Remover Disciplina;
    - Obter Plano Curricular.

    4. Professor

    Atributos:
    - Matrícula;
    - Nome;
    - Titulação;
    - Área de Especialização.

    Comportamentos:
    - Atribuir Notas;
    - Lancar Frequência;
    - Obter Turmas.

    5. Turma

    Atributos:
    - Código;
    - Disciplina;
    - Período;
    - Professor.

    Comportamentos:
    - Adicionar Aluno;
    - Remover Aluno;
    - Obter Lista Presença.

## __Questão 06:__  Imagine um jogo qualquer. Identifique o máximo de objetos possíveis e eventuais  características (atributos) e comportamentos (métodos) que eles poderiam ter. 

    JOGO DE DAMAS

    Objetos:

    1. Jogo
        - Atributos:
            - Estado (iniciado, pausado, finalizado)
            - Jogador da vez
            - Placar
        - Métodos:
            - Iniciar partida
            - Realizar jogada
            - Pausar
            - Finalizar partida

    2. Jogador
        - Atributos:
            - Nome
            - Cor (preto ou branco)
            - Peças restantes
        - Métodos:
            - Realizar movimento
            - Capturar peça
            - Obter estatísticas

    3. Peça
        - Atributos:
            - Cor
            - Posição
            - Tipo (dama ou peão)
        - Métodos:
            - Mover
            - Capturar
            - Promover a dama

## __Questão 07:__  Considerando o exemplo da classe Retangulo dos slides, implemente um método  adicional chamado que calcule o perímetro do retângulo. Teste os métodos do  retângulo. 

[clique aqui para acessar os códigos de resolução no github](https://github.com/victordev018/POO-discipline-ads/tree/main/atividades%20e%20trabalhos/java/src/extraExercise/rectangleProgram)

## __Questçao 08:__ Crie uma classe Circulo que possua um atributo raio. Crie dois métodos que  calculam a área e o perímetro. Instancie um objeto dessa classe, atribua um valor  ao raio e exiba a área e o perímetro chamando os dois métodos definidos. 

[clique aqui para acessar os códigos de resolução no github](https://github.com/victordev018/POO-discipline-ads/tree/main/atividades%20e%20trabalhos/java/src/extraExercise/circleExercise)

## __Questão 09:__ Crie uma classe chamada SituacaoFinanceira com os atributos valorCreditos e  valorDebitos. Crie um método chamado calcularSaldo() que retorna/calcula a  diferença entre crédito e débito. Instancie uma classe SituacaoFinanceira, inicialize os dois atributos e exiba o resultado do método calcularSaldo().

[clique aqui para acessar os códigos de resolução no github](https://github.com/victordev018/POO-discipline-ads/tree/main/atividades%20e%20trabalhos/java/src/extraExercise/financialExercise)

## __Questão 10:__ Represente as classes das questões 8 e 9 no formato UML.

