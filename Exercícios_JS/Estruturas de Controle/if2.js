function teste1(num) {
    if(num>7)
        console.log(num)
        console.log('Final')
}

teste1(6)
teste1(8)

//varias sentenças precisam estar dentro de chaves. aí, tá imprimindo final mesmo em números menores que 7

function teste2(num){
    if (num>7); {
        console.log(num)
    }
}

teste2(6)
teste2(8)

//o ; separa o if das {}. fica como se {} fosse um objeto