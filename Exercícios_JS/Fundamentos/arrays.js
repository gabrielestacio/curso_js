const valores = [7.7,8.9,6.3,9.2]

console.log(valores[0], valores[3]) //exibe os elementos dos índices
console.log(valores[4])

valores[4] = 10
console.log(valores[4])
//valores[10] = 5
//console.log(valores)
console.log(valores.length)

valores.push(false, 'gabriel', {id: 5}) //adicionar valores ao array
console.log(valores) //apesar da permissividade de js de um array com vários tipos de dados, é melhor que faça um array pra cada tipo

console.log(valores.pop()) //vai retornar o último valor do array e vai deletá-lo do vetor
delete valores[0] //deleta o valor do índice
console.log(valores)

console.log(typeof valores)