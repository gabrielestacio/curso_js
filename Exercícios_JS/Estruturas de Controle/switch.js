const imprimirResultado = function(nota){
    switch (Math.floor(nota)){
        case 10:
        case 9:
            console.log('Quadro de Honra')
            break
        //se não atribuir nada em um case, ele vai procurar até alguém que tenha alguma coisa e interpretar que essa instrução também é válida pro que tá sem nada
        //ao contrário de if...else, switch retorna valor e não boolean
        //js executa todos os casos por padrão. então, pra sair do switch caso um seja válido, usa o break
        case 8:
        case 7:
            console.log('Aprovado')
            break
        case 6:
        case 5:
        case 4:
            console.log('Recuperação')
            break
        case 3: case 2: case 1: case 0:
            console.log('Reprovado')
            break
        default:
            console.log('Nota inválida')
    }
}

imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(6.55)
imprimirResultado(2.3)
imprimirResultado(-1)
imprimirResultado(11)