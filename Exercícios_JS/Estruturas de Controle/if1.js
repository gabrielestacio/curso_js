function soBoaNoticia(nota){
    if(nota >= 7){
        console.log('Aprovado com nota '+nota)
    }
}

soBoaNoticia(7.3)
soBoaNoticia(5)

function seForVerdadeEuFalo(valor){
    if(valor){ //variável sozinha conta como uma expressão, digamos assim. independente do tipo e do valor, o js vai converter pra verdadeiro ou falso
        console.log('É verdade... '+valor)
    }
}

seForVerdadeEuFalo()
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(undefined)
seForVerdadeEuFalo(NaN)
seForVerdadeEuFalo('')
seForVerdadeEuFalo(0)
seForVerdadeEuFalo(-1)
seForVerdadeEuFalo(' ')
seForVerdadeEuFalo('?')
seForVerdadeEuFalo([])
seForVerdadeEuFalo([1,2,3])
seForVerdadeEuFalo({})

