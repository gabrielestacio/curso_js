function getAleatorioEntre(min,max){
    const valor = Math.random() * (max-min) + min
    return Math.floor(valor)
}

let opcao = -1

do{
    opcao = getAleatorioEntre(-1,10)
    if (opcao != -1){
        console.log(`A opção escolhida foi ${opcao}`)
    }
}while (opcao != -1)

console.log('Até a próxima!')