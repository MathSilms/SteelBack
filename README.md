# Boilerplate API SteelBack ⚙️🚀
***

## Requisitos
- [Node](https://nodejs.org/en/download/)
- [Yarn](https://yarnpkg.com/lang/en/docs/install)
## Comandos

Para iniciar a aplicação em ambiente de desenvolvimento basta executar o comando: `yarn dev` <br>Todavia existe alguns comandos que podem lhe ajudar a realizar outras tarefas como testes de integração, testes unitários, etc. Uma lista completa sobre os comandos de inicialização pode ser vista abaixo:

Comandos  | Tarefa a ser realizada
------------- | -------------
`yarn start` | Inicializa o serviço em ambiente de produção
`yarn stop` | Para o serviço em ambiente de produção
`yarn dev:server` | Inicializa o serviço em ambiente de desenvolvimento<br>Esse modo de inicialização permite que serviço seja reiniciado sempre que houver uma mudança nos arquivo do projeto
`yarn docker:start` | Inicia os serviços/conteiner Docker
`yarn docker:stop` | Para o serviços/conteiner Docker
`yarn typeorm migrate:create -n NomeDaMigration` | Cria uma nova migration
`yarn typeorm migrate:run` | Migra todas as migrações baseado no models para o banco de dados
`yarn typeorm migrate:revert` | Desfaz todas as migrações do banco de dados
`yarn lint` | Monstrar os possíveis erros de linting
`yarn lint:fix` | Tenta corrigir os possíveis erros de linting
`yarn build` | Faz a compilação dos arquivos de Typescript para Javascript
`yarn test` | Faz a aplicação dos testes unitários + integração e retorna no console o log de forma resumida
`yarn test:verbose` | Faz a aplicação dos testes unitários + integração e retorna no console o log completo
`yarn test:integration` | Faz a aplicação dos testes de integração apenas
`yarn test:covarage` | Faz a aplicação dos testes unitários + integração e retorna a cobertura completa de testes

## Release 2.1.0
`views` | inserido o conceito de views para o retorno das response da API
`repositories` | local onde será configurado os tipos de requisições as apis externas e a banco de dados
`config/api.ts` | padronização das baseUrl das chamadas a api externas
`ts-node-dev` | foi trocado o nodemon pelo ts-node-dev para maior integração com typescript e facilidade em debugar aplicações
`wiston` | O log foi alterado pelo winston para  melhor planejamento dos loggers
`typeorm` | foi migrado a solução para orm em terceiro nivel de abstração com biblioteca preparada para ambiente typescript
`redis` | foi integrado solução de cache para ambiente RedisDB;
`requestId` | middleware de requisição de Id unico;
`nocache` | middleware integrado com a finalidade de desabilitar cache de requisição;

## Recomendações

`graphql` | integrar as soluções com o graphql;
`firestore` | integrar as soluções do Firebase da Google;

## Autores/Revisores da v2

👤 **Cláudio Rapôso <>** <br>
👤 **Matheus Oliveira <>** <br>


