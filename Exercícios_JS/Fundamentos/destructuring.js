const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const {nome, idade} = pessoa //operador destructuring. forma de tirar apenas algumas informações de dentro de um objeto ou vetor
console.log(nome, idade)

const {nome: n, idade: i} = pessoa //mudando o nome da variável no escopo externo.
console.log(n, i)

const {sobrenome, bemhumorada = true} = pessoa //true vai ser o valor padrão de bemhumorada para não retornar undefined
console.log(sobrenome, bemhumorada)

const {endereco: {logradouro, numero}} = pessoa
console.log(logradouro, numero)