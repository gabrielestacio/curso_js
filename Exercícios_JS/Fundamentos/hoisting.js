console.log("a = ", a) //dá undefined porque a ainda não foi inicializada até essa linha. mas, mesmo a declaração de a vindo depois dessa linha, pelo hoisting (içamento), o programa vai saber que a existe. é como se a "subisse a linha", mas seu valor não
var a = 2
console.log("a = ", a)

// identico
var b
console.log("b = ", b)
b = 2
console.log("b = ", b)

//isso também funciona dentro da função
//isso não tem muita utilidade prática, mas é importante saber pra não ser surpreendido

/*console.log("c = ", c)
let c = 2
console.log("c = ", c)*/

//isso não funciona com let
