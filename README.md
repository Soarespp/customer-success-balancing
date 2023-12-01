# Desafio Customer Success Balancing

[![Node.js CI](https://github.com/Cleok3Lima/CustomerSuccessBalancing-challenge/actions/workflows/node.js.yml/badge.svg)](https://github.com/Cleok3Lima/CustomerSuccessBalancing-challenge/actions/workflows/node.js.yml)

This project is part of a coding challenge where the task was to implement a JavaScript solution that assigns and retrieves the ID of the Customer Success with the highest number of clients. It was part of an interview challenge.

## Requerimentos

- Necessário ter instalado node
- Estar dentro da pasta do projeto, e manter o arquivo Readme.md fora da pasta <code>./services</code>

## Teste

```bash
cd javascript
yarn
yarn test
```

Ou usando o NPM:

```bash
cd javascript
npm install
npm test
```

```

## Descrição do desafio

Este desafio consiste em um sistema de balanceamento entre clientes e Customer Success (CSs). Os CSs são os Gerentes de Sucesso, são responsáveis pelo acompanhamento estratégico dos clientes.

Dependendo do tamanho do cliente - aqui nos referimos ao tamanho da empresa - nós temos que colocar CSs mais experientes para atendê-los.

Um CS pode atender mais de um cliente, além disso, os CSs também podem sair de férias, tirar folga, ou mesmo ficarem doentes, então é preciso levar esses critérios em conta na hora de rodar a distribuição.

Dado este cenário, o sistema distribui os clientes com os CSs de capacidade de atendimento mais próxima (maior) ao tamanho do cliente.

## Premissas

Onde n = número de CSs
Onde m = número de clientes

- Todos os CSs têm níveis diferentes
- Não há limite de clientes por CS
- Clientes podem ficar sem serem atendidos
- Clientes podem ter o mesmo tamanho
- 0 < n < 1.000
- 0 < m < 1.000.000
- 0 < id do cs < 1.000
- 0 < id do cliente < 1.000.000
- 0 < nível do cs < 10.000
- 0 < tamanho do cliente < 100.000
- Valor máximo de t = n/2 arredondado para baixo



## Regras adicionais

- Em caso de empate:
  - O

- Caso não passar CSs retornara:

  - O

- Caso não passar clientes retornara:
  - O

- Caso passar mais que 1.000 CSs, sera filtrado apenas os 999 primeiros

- Caso passar CSs com nível a cima de 10.000, serão desconsiderados.

- Caso passar mais que 1.000.000 CSs, sera filtrado apenas os 999.999 primeiros

- Caso passar clientes com nível a cima de 10.000, serão desconsiderados.

## Conclusão do serviço

O resultado esperado deve ser o id do CS que atende mais clientes. Com esse valor a empresa poderá fazer um plano de ação para contratar mais CS’s de um nível aproximado.

## GitHub Actions
```
