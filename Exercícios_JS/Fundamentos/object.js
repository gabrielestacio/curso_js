const prod1 = {} //{} é notação de objeto. objeto criado vazio e depois é preenchido dinamicamente
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4998.90
prod1['desconto legal'] = 0.40 //evitar atributos desse jeito, apesar de ser possível

//nome da chave precisa ser único em cada objeto

console.log(prod1)

const prod2 = { //outra forna de declarar o objeto, de forma estática
    nome: 'camisa legal',
    preco: 79.90,
    /*obj: {
        blabla: 1
        obj: {
            blabla: 2
        }
    }*/
}

console.log(prod2)