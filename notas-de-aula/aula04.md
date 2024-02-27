# Anotações - Aula 04

## RUST (Continuando...)

### Array e Vector
```
let v = [0,0,0]; // vetor estático
let v = Vec::new() // vetor dinâmico
v.push(10) // insere o valor 10 no vetor dinâmico
```
#### Boa Prática

Tentar sempre prealocar o vetor.

``let v = Vec::withcapacity()`` 

### Pattern Matching

Semelhante a destruturação em TypeScript, o pattern matching funciona da seguinte maneira:

```
let (v1, v2) = my_tuple();

fn my_tuple() -> (i32, i32) {
    (0, 0)
}
```
OBS: O tipo NULL não existe em Rust.

Logo se eu quiser fazer a verificação se retorna algo ou não usamos o **Option**.

```
let r = maybe();

fn maybe() -> Option<i32> { // O option é um enum
    Some(0) // alguma coisa
}

match r { // aqui a mágica do pattern matching acontece
    Some(v) => {}, // se retorna algo executa esta linha
    None => {} // se retorna nada executa esta
};
```
Podemos escrever também das seguintes maneiras: \
Aqui o v só existe dentro do escopo do if
```
if let Some(v) = maybe() {

} else {

}
```
Aqui o v existe no escopo externo
```
let Some(v) = maybe() else {
    return
}
```

Lembrando que o **Option** é fundamental aqui.

### Result - Tratamento de Erros

Result é um enum que retorna sucesso ou falha.
```
Result<T, E> {
    Ok(T),
    Err(E)
}
```

### Struct

A struct em rust pode ser publica(pub) ou privada(padrão) \
Podemos acessar os membros de uma struct instanciada através do operador "**.**" \
É possível criar funções para a struct diferentemente de outras linguagens como c ou c++. Para isso usamos a palavra reservada **impl**.

```
struct Teste { // criando a struct
    t1: i32,
    t2: String
}
impl Teste {
    fn oi() {} // função da minha struct (não precisa existir instância da struct)
    fn ola(self) {}
    fn hello(&self) {}
}

Teste::oi() // chamando o método sem instanciar

let a = Teste { // criando uma instancia da struct
    t1: 10,
    t2: String::new()
}

a.ola(); // função que necessita de uma instância porém ela toma o ownership da instância e destroi a instância ao finalizar a chamada.


```

OBS: Existe diferença dos entre os membros da struct e dos membros da instancia da struct.

A palavra reservada **self** como paramêtro (primeiro argumento) identifica a função que precisa de uma instância da struct.

Ao utilizarmos o operador **&** emprestamos a instância para a função e assim não movemos a variável (ponteiro). Com isso, a instância continua intácta no escopo.

### Enum (ESTUDAR)

### Match (ESTUDAR)

### Raw Pointers e Smart Pointers (ESTUDAR)

### Trait

Traits são como interfaces porém não possuem atributos. \
Elas definem métodos (funções) padrões para um tipo (primitivo, struct, etc). \
São usadas para trazer funcionalidades.

```
trait MyTrait {
    fn hello(&self);
}
struct MyStruct {}

impl MyTrait for MyStruct { // trait em uma struct
    fn hello(&self) {
        println!("Hello World!");
    }
}

impl MyTrait for u8 { // trait em um tipo primitivo
    fn hello(&self) {
        println!("Hi Stranger!");
    }
}

```

### Generics

São valores genéricos que podem receber qualquer tipo de dado.

Exemplo:

```
struct MyStruct<T> {
    g: T // g é do tipo T (Genérico)
}

let m = MyStruct { g: String::new() }; // string
let n = MyStruct { g: 10}; // inteiro
```

OBS: O **Option** e o **Result** usam valores genéricos.

### Macros
Exemplos:
- format!
- println!
- vec!

Olhar na documentação

### Annotations

Sintaxe: ``#[]``

Verificar a documentação

### Async

Estudar computação concorrente x paralela \
Pesquisar modelo de atores \
crate tokio