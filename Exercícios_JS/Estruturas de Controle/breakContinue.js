const nums = [1,2,3,4,5,6,7,8,9,10]

for(let x in nums){
    if(x == 5)
        break //ele não age sobre if, mas sobre for (que é o laço que ele age que está mais próximo dele). o programa deveria sair de if e continuar imprimindo o resto, mas o break agiu em for. age em laços de repetição e no switch
    console.log('x = '+nums[x])
}

console.log(' ')

for(let y in nums){
    if(y == 5)
        continue //vai interromper a repetição atual e ir pra próxima, e não sair do laço, como o break. também não age sobre if. continue só faz sentido em laços de repetição
    console.log('y = '+nums[y])
}

externo: //rótulo
    for(let a in nums){
        for(let b in nums){
            if(a == 2 && b == 3) break externo //sem o rótulo, break agiria sobre o for interno, que é o mais próximo dele. o rótulo faz ele quebrar o for de fora
            console.log(`Par = ${a}, ${b}`)
        }
    }

//não é recomendado usar algo como essa estrutura de cima (com rótulos). faça uma lógica diferente que é possível com certeza. evite o máximo possível desviar fluxo com break e continue. só quando for realmente necessário. existem alternativas ao for, mas só mais na frente.