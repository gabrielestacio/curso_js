var a = 3
let b = 4 //Forma preferível de declarar variáveis, pois é mais moderna. Explicação das diferenças mais na frente no curso.

/* Porém, com var você pode "redeclarar" a variável no mesmo escopo, o que let não permite.
    Por exemplo:
        var a = 5
        ...
        var a = 15

    var vai realizar apenas a substituição de valores em a. Porém, isso não tem utilidade.
*/

a = 300
b = 400

console.log(a,b)

const c = 5
console.log(c)
