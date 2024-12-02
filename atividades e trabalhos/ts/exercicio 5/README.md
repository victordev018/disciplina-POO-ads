# Exercício 05

## __Questionamentos__

### a. Você concorda que o banco faz o cadastro de duas entidades e ainda faz regras de negócios?

> Não concordo, pois isso fere o princípio da responsabilidade única (SRP), que estabelece que cada
> classe, função ou módulo deve ter apenas uma razão para mudar, e essas regras de negócio e validações
> sobre os clientes as contas não deveriam estar na classe de Banco, somente as operações relacionadas
> ao banco.

### Não seria adequado o banco ter uma class CadastroDeClientes e CadastroDeContas e algumas regras de validação serem feitas no banco e deixar os métodos de consulta e inclusão os mais simples possíveis?

> Sim, pois delegaria a responsabilidade de cadastro de contas e clientes para classes mais especializadass para tal atividade, respeitando o princício SRP. 

### O método associar cliente a uma conta deveria estar em que classe? Banco, CadastroDeContas ou CadastroDeClientes?

> Deveria estar na classe CadastroDeContas.