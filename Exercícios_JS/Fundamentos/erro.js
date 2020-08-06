function tratarErroELancar(erro){
    //throw new Error('ERRO')
    //throw 10
    //throw false
    //throw 'ERRO'
    throw { //reporta o erro pro usuário
        nome: erro.name,
        msg: erro.mensage,
        date: new Date
    }
}

function imprimirNomeGritado(obj) {    
    try{ //bloco de código onde você coloca códigos que você julga que pode dar algum tipo de erro
        console.log(obj.name.toUpperCase()+'!!!')
    }
    catch (e){ //captura o erro
        tratarErroELancar(e)
    }
    finally{ //vai ser executado mesmo se der erro ou não
        console.log('Fim de papo.')
    }
}

const obj = {
    name: 'Roberto'
}

imprimirNomeGritado(obj)