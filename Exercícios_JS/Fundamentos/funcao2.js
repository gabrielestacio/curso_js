//armazenando uma função em uma variável

const imprimeSoma = function(a, b){ //função anônima (sem nome)
    console.log(a+b)
}

imprimeSoma(2,3)

//armazenando uma função arrow em uma variável
//função arrow: forma reduzida de declarar uma função
const soma = (a, b) => {
    return a+b
}

console.log(soma(2,3))

//retorno implícito

const subtracao = (a,b) => a-b //função de linha única não precisa de {}
console.log(subtracao(2,3))

const imprimir2 = a => console.log(a)
imprimir2('Legal')