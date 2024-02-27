# Anotações - Aula 01

## NODEJS (CONFIGURAÇÃO INICIAL)

### Package Manager - NPM

Iniciar o projeto: \
`npm init -y`

Instalando pacotes usando npm: \
`npm i "nome do pacote"` \
Flag -D para ambiente de desenvolvimento (devDependencies)

Lembrar de criar o arquivo .gitignore e adicionar o diretório **node_modules**

### Configurando o Nodejs (package.json)

Uso de scripts dentro do package.json - "start" ou "test" \
Remover os "^" das versões dos pacotes. (Atualiza automaticamente os pacotes) \
Para verificar falhas de segurança nas versões `npm audit` \
2.0.4 - 2 major, 0 minor, 4 patch.

### Instalando TypeScript

`npm install -D typescript` \
https://www.npmjs.com/package/typescript

### Configurando o Typescript (tsconfig.json)
Criar o arquivo tsconfig.json com o seguinte conteúdo:

```
{
    "compilerOptions": {
        "target": "es2016", //versão alvo do js - 2016 é a mais comum
        "module": "commonjs",
        "rootDir": "./", //pasta raiz
        "outDir": "./dist", //diretorio de saída
        "esModuleInterop": true,
        "forceConsistentCasingInFileNames": true,
        "strict": false, //modo restrito
        "skipLibCheck": true
    },
    "include": [
        "./src/**/*.ts"
    ],
    "exclude": [
        "node_modules"
    ]
}
```

Ou utilizar o comando `` npx tsc --init`` para iniciar um projeto typescript e gerar o arquivo tsconfig.json

## Simulando Sensores de Temperatura e Umidade

Para realizar a simulação dos sensores, será utilizado um projeto em javascript / nodejs.

## UM POUCO SOBRE JAVASCRIPT

### Formas de importar uma biblioteca em JavaScript

#### 1.
``const {} = require('')`` \
cria uma constante e faz a requisição do pacote no node.

e.g. FILESYSTEM (fs)

``const fs = require('fs')``

OU
#### 2.
``import {} from ''``

e.g. FILESYSTEM fs

```
import fs from 'fs'
import { } from 'fs'
```

### Criando objetos

#### Através de classes
```
class Exemplo {}
const exemplo = new Exemplo()
```
#### Atribuindo um objeto a uma variável
``const teste = Math``

#### Objeto anônimo
```
const anonimo = {
    teste: 'testando',
    teste2: 10,
    func: () => {}
}
```
### Desestruturação de um objeto
Usando o objeto anonimo acima: \
``const { teste, teste2 } = anonimo`` \
cria uma variável com o valor 'testando' e uma outra com o valor 10


### Gerenciar eventos no tempo

- setImmediate - ???

- setInterval - executa a cada intervalo de tempo

- setTimeout - executa após um intervalo de tempo

### Callback

Agendar uma execução de código. \
As funções de callback permitem que executemos tarefas de forma assíncrona. \
Exemplo:
```
const mensagem = function() {
  console.log("Essa mensagem é exibida depois de 3 segundos");
};
setTimeout(mensagem, 3000);
```

### Declaração de Funções (Pesquisar)

#### Função Anônima

#### Função Nominal

#### Arrow Functions