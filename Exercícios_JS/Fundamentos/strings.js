const escola = "COD3R"

console.log(escola.charAt(4)) //começa pelo índice 0
console.log(escola.charAt(5)) //retorna vazio
console.log(escola.charCodeAt(3)) //retorna o valor do caractere na tabela ASC
console.log(escola.indexOf('3')) //retorna o valor do índice do caractere 3
console.log(escola.substring(1)) //vai imprimir a partir do índice entre parênteses
console.log(escola.substring(0,3)) //vai imprimir só o que tá no intervalo determinado, sem incluir o último índice (imprime só 0, 1 e 2)
console.log('Escola '.concat(escola).concat("!")) //concatenação
console.log('Escola ' + escola + "!") //concatenação
console.log(escola.replace(3, 'e')) //substitui no índice indicado
console.log("Ana,Maria,Pedro".split(',')) //converte num array com o separador indicado nos parênteses