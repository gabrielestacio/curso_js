const funcs = []

for (var i = 0; i<10; i++){
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2]()
funcs[8]()
// mais uma vez, por var não ter escopo de bloco, toda chamada que eu fizer da função do vetor vai dar o mesmo resultado.