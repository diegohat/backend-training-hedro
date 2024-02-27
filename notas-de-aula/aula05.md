# Anotações - Aula 05

## RUST (Projeto Prático)

### Módulos

Cada arquivo do meu programa (.rs) é um módulo. \
Para utilizar os módulos é necessário declara-los no arquivo principal (main).

Módulos do Cargo - ``use std::env::var;``
Módulos do meu projeto - ``use crate::teste``

Para criar um módulo que seja uma pasta, basta criar a pasta e adcionar no main a linha ``mod "nome da pasta"`` e criar um arquivo chamado mod.rs dentro da mesma.
Esse arquivo receberá os imports dos módulos que existirem dentro da pasta.

OBS: Lembrar das condições de público e privado dos módulos.

Serialização e Deserialização (ESTUDAR!)

### Tratamento de Erros

Pode-se utilizar pattern matching (match) ou a função ``.expect(msg)``. O segundo é utilizado no main pois mata a aplicação e não é recomendado matar a aplicação fora do main. \
Em módulos usamos ``let Ok() else {}`` pois esse retorna o erro para o main e lá decidimos o que fazer com esse erro. \
Podemos utilizar ``.unwrap()`` mas não é recomendado.

### Crates

Ler documentação das crates utilizadas.

### Softwares para Backend

Software para backend precisam ser pensados e criados para rodar em containers.

Pensar nas responsabilidades de cada etapa do programa.

### Bufffer

Padrão de Projeto - Channel

Stream - fluxo de dados.