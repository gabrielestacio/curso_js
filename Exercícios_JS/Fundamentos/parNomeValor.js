// par nome/valor (chave/valor)
const saudacao = 'Fala tu padrin' //contexto léxico: contexto (parte do código, bloco, etc) onde a variável foi definida

function exec(){
    const saudacao = 'Coé pivete' //outro contexto léxico
    return saudacao
}

//objetos são grupos aninhados de pares nome/valor

const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua dos Bobos',
        numero: 0
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)