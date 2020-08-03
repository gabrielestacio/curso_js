var numero = 1
{
    var numero = 2
    console.log('dentro = ', numero)
}
console.log('fora = ', numero)
//dá errado porque as duas estão em escopo global, logo numero = 1 foi sobrescrito por numero = 2

