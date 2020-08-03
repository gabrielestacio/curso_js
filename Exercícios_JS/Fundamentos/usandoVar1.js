{
    {
        {
            {
                var sera = 'Será???' //em JS, as variaveis definidas por var só tem dois escopos possíveis. nesse caso, como a variável não está definida numa função, sem escopo será global
                //o fato de tudo que não está em função ser global complica. Cuidado para não sobrescrever uma variável (redeclarar, criar uma igual com outro valor)
                }
        }
    }
}
console.log(sera)

function teste(){
    var local = 123
    console.log(local)
}

teste()
//console.log(local) //vai dar errado porque local está associado a função