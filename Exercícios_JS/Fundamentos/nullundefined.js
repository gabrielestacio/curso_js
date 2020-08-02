//tipos primitivos fazer atribuição por valor. outros tipos fazem atribuição por referência
//por valor: o valor que é passado para a variável
//por referência: o endereço de memória onde o valor está armazendo é que é passado para a variável

let valor //não inicializada 
console.log(valor)

valor = null //ausência de valor. ela foi definida/inicializada, mas dizendo que ela não aponta pra nenhum local de memória, como se ela estivesse vazia. faz sentido usar em tipos por referência, como se voc~e quisesse zerar a variável
console.log(valor)
//console.log(valor.toString()) //vai dar erro. não posso acessar atributo de alguém que é nulo

const produto = {}
console.log(produto.preco) //vai dar undefined, pois produto está definido, mas preco não
console.log(produto)
produto.preco = 3.50
console.log(produto)

produto.preco = undefined //evite atribuir undefined. nesse caso, 0 é melhor que null pra zerar, pois essa é uma chave com valor numérico, tipo primitivo, atribuição por valor.
console.log(!!produto.preco)
//delete produto.preco // deletar atributo do objeto
console.log(produto)

produto.preco = null //sem preço
console.log(!!produto.preco)

console.log(produto)
