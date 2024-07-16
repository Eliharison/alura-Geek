# AluraGeek-challenge

Este trabalho foi realizado como parte de um desafio lançado pela Alura, com a meta de construir um e-commerce denominado "AluraGeek" a partir de um design fornecido no Figma. O desafio exigiu a implementação de todas as funcionalidades do início, utilizando somente HTML, CSS e JavaScript.

## Descrição do Projeto

O AluraGeek é uma plataforma de comércio eletrônico que permite aos usuários visualizar, adicionar e remover itens de um catálogo. Os produtos são exibidos de forma dinâmica a partir de uma base de dados local (JSON), e os usuários têm a possibilidade de inserir novos produtos por meio de um formulário.

## Funcionalidades

- Apresentação dinâmica dos itens a partir de uma base de dados local (JSON).
- Inclusão de novos itens por meio de um formulário.
- Remoção de produtos já existentes.

## Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript (ES6+)
- JSON Server (para simular uma API REST)

## Validação do Formulário


Este projeto conta com um sistema de validação para assegurar que os campos do formulário sejam preenchidos corretamente antes do envio. A seguir, está o código de validação utilizado no arquivo validacao.js:

- Verificação Personalizada com Patterns: Foi adicionada uma verificação personalizada para garantir que determinados padrões sejam seguidos ao preencher o formulário.
- Mensagens de Erro: Mensagens de erro personalizadas são exibidas conforme o tipo de erro de validação.


## Pré-requisitos

* Ter o Node.js instalado em sua máquina;
* Instalar o node_modules no projeto através do comando:
    * `npm install`
* Mockar a Sua própria API através dos passos abaixo:
    1. Criar um arquivo chamado "db.json" para a simulação de sua API
    2. Executar o comando dentro do local em que está seu arquivo .json 
        * `json-server --watch db.json`
    3. Trocar a URL do serivor dentro de conectaAPI.js pela URL fornecida pelo json-server
