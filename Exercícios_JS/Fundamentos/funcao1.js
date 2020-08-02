//função sem retorno
function imprimirSoma(a, b){
    console.log(a+b)
}

imprimirSoma(2,3)
imprimirSoma(2) //o segundo parâmetro é undefined 
imprimirSoma(2, 3, 4, 5, 6, 7, 8, 9) //ele vai pegar os dois primeiros e  ignorar o resto
imprimirSoma() //os dois parâmetros são undefined

//função com retorno
function soma(a, b = 1){ //passei um valor padrão pra b
    return a+b
}

console.log(soma(2, 3))
console.log(soma(2))
console.log(soma()) //o primeiro é undefined