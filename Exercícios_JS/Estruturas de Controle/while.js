function getInteiroAleatorioEntre(min,max){
    const valor = Math.random() * (max-min) + min
    return Math.floor(valor)
}

let opcao = 0

while (opcao != -1){
    opcao = getInteiroAleatorioEntre(-1,10)
    if (opcao != -1){
        console.log(`Opção escolhida foi ${opcao}`)
    }
//  else{
//      break
//  }
}

console.log('Até a próxima!')