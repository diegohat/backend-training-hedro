# Anotações - Aula 03

## GitFlow

Duas branches principais

- Development ou Develop ou Staging.
- Production ou Prod ou Main.

O que vai pro cliente é o que está em "produção". \
Ao validar as modificações na branch develop "sobe" as alterações para a production.

A branch develop é sempre a mais atualizada. (recente)

Para criar uma nova funcionalidade, cria-se uma branch do develop. \
``git checkout -b feature "nome da feature"`` \
Após validar tudo, subimos para o ambiente de teste (branch develop) usando pull requests (github).

Não usar merges manuais!! \

Ao criar pull requests, colocar no título o nome da feature e a descrição do código. \
É possível comentar trechos e solicitar revisões.

### HOTFIX

criar uma branch da main. \
fazer um pull request na main e na staging.

## CI / CD (PESQUISAR!)

Continuous Integration. \
Continuous Delivery.

Automações que garantem a integridade, resiliencia e a atualização automática do meu software.

CI - Garante padrão de desenvolvimento (boas práticas), evita vulnerabilidades.

CD - Fazer deploys automáticos. (?)

Pesquisar livro do google sobre CI/CD. \
CircleCI - pesquisar / estudar.


## Dockerfile & Docker-Compose

Olhar documentação em caso de dúvidas.

## RUST

rustc - compilador rust \
cargo - gerenciador de pacotes - https://crates.io

aprender lendo código - bibliotecas grandes

Livro - https://doc.rust-lang.org/stable/book/ 

Vídeos - https://youtube.com/playlist?list=PLai5B987bZ9CoVR-QEIN9foz4QCJ0H2Y8&si=qfAFLT9d2yFj99rO

Rust é uma linguagem multiparadigma. Não é orientada a objetos. \
Variáveis imutáveis por padrão.

### Criando um novo projeto usando Cargo

``cargo new --bin hello-world`` - cria um binário \
``cargo new --lib hello-world`` - cria uma biblioteca

### Tópicos importantes

Estudar:

- Move
- Borrow
- Shadowing
- Ownership
- Lifetime
- Pattern Matching
- Trait
- Struct
- Enum
- Generics
- Async
