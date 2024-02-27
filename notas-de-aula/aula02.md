# Anotações - Aula 02

## MQTT

Protocolo de comunicação da camada 7 \
Surgiu como proposta de automação industrial \
Comunicação bidirecional \
Broker MQTT é usado nos dispositivos (iot) por ser mais simples e mais leve \
Modelo de Publish & Subscribe \
Tópico usa padrão URI aaa/aaaa/aaaaa/aaaaaa

#### Wildcards usados nos tópicos

- \# - tudo
- \+ - qualquer um
- $ - reservado para estatisticas do broker

#### QoS

Niveis de ack: 0, 1 e 2

### Microserviços

DIvisão do sistema em pequenos módulos \
Quebra o serviço (bloco) em pequenos serviços (microserviços) \
Microserviços precisam conversar um com o outro

### Comunicação síncrona e assíncrona

- síncrona - solicitação requer resposta imediata. Necessita da resposta pra continuar o processo.
- assíncrona - responsabilidades únicas independentes (broker)

## JAVASCRIPT (Continuando...)

### Variaáveis de Ambiente

Sempre utilizar variáveis no arquivo .env \
Por segurança e pela facilidade pra mudar os dados iniciais \
CHAVE = VALOR - Exemplo:\
MQTT_HOST=test.mosquitto.org \
É necessário verificar se as variáveis possuem valor (existe maneira melhor de verificar?)

### Camadas (PESQUISAR)

Utilizar divisão em módulos \
No projeto foi usado divisão em camadas (src, infra, services) \
Atentar para a hierarquia das camadas \

- services - lógicas essenciais para o programa funcionar (validação)
- infra - conexões externas à aplicação

Camadas internas não importam nada das camadas externas \
Construir software em camadas com responsabilidades bem distribuidas \
LIVRO - THE CLEAN ARCHITECTURE

Formas de construir camadas:
- Objetos anônimos
- Orientado a Objeto (usado no projeto)


### SOLID (ESTUDAR!)

- Single - responsabilidade única
- Open Closed - extender e adicionar sem alterar
- Liskov - toda e qualquer classe derivada deve poder ser usada como se fosse a classe base
- Interface Segregation - é melhor criar interfaces mais específicas ao invés de termos uma única interface genérica
- Dependency Inversion Principle - Módulos de alto nível não devem depender de módulos de baixo nível

### Twelve-Factor (Heroku)

https://12factor.net (ESTUDAR!)


### Pacotes utilizados na aula

- pino - criar logs (logger)
- pino-prettier - formata os logs
- eslint - ajuda no padronização do projeto
- mqtt - suporte ao protocolo mqtt
- dotenv - suporte a variáveis de ambiente

## Docker / Containers

Explicação geral... (Talvez usar GPT)