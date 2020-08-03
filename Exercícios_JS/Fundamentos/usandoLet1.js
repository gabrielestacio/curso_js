var numero = 1
{
    let numero = 2
    console.log('dentro = ', numero)
}
console.log('fora = ', numero)
//let possui escopo 'local' pra todo tipo de bloco, não só pra função, então não sobrescreve.

var numero = 1
{
    let numero2 = 2
    console.log('dentro = ', numero)
}
console.log('fora = ', numero)
//ele vai imprimir o de fora duas vezes, pois se não achar no escopo local, vai procurar no 'de fora', até chegar ao global. se em nenhum escopo existir a variável, vai dar is not defined. se tiver em algum escopo de fora (nesse exemplo, tem no global), ele vai imprimir o valor desse escopo de fora.