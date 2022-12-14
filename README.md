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

O objetivo desse projeto ?? implementar uma API simples seguindo alguns guias de design de APIs como refer??ncia. Todos os padr??es citados aqui ser??o implementados no projeto. Para que isso seja poss??vel os padr??es ser??o acrescentados assim que a implementa????o estiver bem definida.

## REST Basics - URLs

- N??o deve usar `/api` como url base;
- Deve usar nome de recursos no plural, exemplo, `/users`, `/books`, `payments`;
- Deve usar kebab-case para paths com segmentos `/shipment-orders/{shipment-order-id}`;

Mais informa????es veja [REST Basics - URLS](https://opensource.zalando.com/restful-api-guidelines/#urls)

## M??todos HTTP
Os seguintes m??todos HTTP devem ser utilizados seguindo as defini????es abaixo. Em caso da API n??o suportar um m??todo espec??fico um HTTP Status Code igual a 405 `Method Not Allowed` deve ser retornado.

### GET
Os m??todos do tipo `GET` n??o dever??o alterar o estado da aplica????o, ou seja, sem efeitos colaterais, de modo que nenhuma altera????o dever?? ser feita ap??s o t??rmino da requisi????o. O m??todo `GET` nunca dever?? aceita `body payload`.
Tipos de retorno:
 - Um recurso ??nico com c??digo `200 OK` ou gerar um `404 Not Found` se o recurso n??o for encontrado;
 - Uma cole????o de recursos com c??digo `200 OK` (mesmo que vazia) ou `404 Not Found` (se a cole????o n??o existir);

Mais informa????es [aqui](https://opensource.zalando.com/restful-api-guidelines/#get)

### POST
Requisi????o do tipo `POST` s??o usadas para criar um ??nico recurso em uma cole????o de recursos relacionados ao endpoint. A sem??ntica relacionada ao recurso do endpoint ?? melhor descrito como "por favor adicione esse dado representado em anexo para a cole????o identificada na URL".

- Na resposta de sucesso do `POST`, o servidor ir?? criar um ou v??rios novos recursos e prover suas URI/URIs para acesso em sua resposta;

- Uma requisi????o bem sucedida do m??todo `POST` retorna `201 Created` se um novo recurso foi criado ou `202 Accepted` se uma requisi????o foi aceita para ser processado assincronamente.

Mais informa????es [aqui](https://opensource.zalando.com/restful-api-guidelines/#post)

### PUT
Mais informa????es [aqui](https://opensource.zalando.com/restful-api-guidelines/#put)

### PATCH
Mais informa????es [aqui](https://opensource.zalando.com/restful-api-guidelines/#patch)

### DELETE
Mais informa????es [aqui](https://opensource.zalando.com/restful-api-guidelines/#delete)

## Refer??ncias

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
