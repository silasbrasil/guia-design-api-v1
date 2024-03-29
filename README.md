<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Guia de Design de API

O objetivo desse projeto é implementar uma API simples seguindo alguns guias de design de APIs como referência. Todos os padrões citados aqui serão implementados no projeto. Para que isso seja possível os padrões serão acrescentados assim que a implementação estiver bem definida.

## REST Basics - URLs

- Não deve usar `/api` como url base;
- Deve usar nome de recursos no plural, exemplo, `/users`, `/books`, `payments`;
- Deve usar kebab-case para paths com segmentos `/shipment-orders/{shipment-order-id}`;

Mais informações veja [REST Basics - URLS](https://opensource.zalando.com/restful-api-guidelines/#urls)

## Métodos HTTP
Os seguintes métodos HTTP devem ser utilizados seguindo as definiçòes abaixo. Em caso da API não suportar um método específico um HTTP Status Code igual a 405 `Method Not Allowed` deve ser retornado.

### GET
Os métodos do tipo `GET` não deverão alterar o estado da aplicação, ou seja, sem efeitos colaterais, de modo que nenhuma alteração deverá ser feita após o término da requisição. O método `GET` nunca deverá aceita `body payload`.
Tipos de retorno:
 - Um recurso único com código `200 OK` ou gerar um `404 Not Found` se o recurso não for encontrado;
 - Uma coleção de recursos com código `200 OK` (mesmo que vazia) ou `404 Not Found` (se a coleção não existir);

Mais informações [aqui](https://opensource.zalando.com/restful-api-guidelines/#get)

### POST
Requisição do tipo `POST` são usadas para criar um único recurso em uma coleção de recursos relacionados ao endpoint. A semântica relacionada ao recurso do endpoint é melhor descrito como "por favor adicione esse dado representado em anexo para a coleção identificada na URL".

- Na resposta de sucesso do `POST`, o servidor irá criar um ou vários novos recursos e prover suas URI/URIs para acesso em sua resposta;

- Uma requisição bem sucedida do método `POST` retorna `201 Created` se um novo recurso foi criado ou `202 Accepted` se uma requisição foi aceita para ser processado assincronamente.

Mais informações [aqui](https://opensource.zalando.com/restful-api-guidelines/#post)

### PUT
Mais informações [aqui](https://opensource.zalando.com/restful-api-guidelines/#put)

### PATCH
Mais informações [aqui](https://opensource.zalando.com/restful-api-guidelines/#patch)

### DELETE
Mais informações [aqui](https://opensource.zalando.com/restful-api-guidelines/#delete)

## Referências

 - [Zalando RESTful API and Event Guidelines](https://opensource.zalando.com/restful-api-guidelines/)
 - [Richardson Maturity Model](https://martinfowler.com/articles/richardsonMaturityModel.html)
 - [REST API Design - Resource Modeling](https://www.thoughtworks.com/insights/blog/rest-api-design-resource-modeling)

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
