const imprimirResultado = function(nota){
    if(nota >= 7){
        console.log('Aprovado')
    } else{
        console.log('Reprovado')
    }
}

imprimirResultado(10)
imprimirResultado(4)

imprimirResultado('Epa!') //como js é fracamente tipada, ela vai aceitar essa resposta, mas vai dar falso, logo, vai cair no else. o certo é criar uma restrição pra que isso dê erro (testar se é um valor numérico)
