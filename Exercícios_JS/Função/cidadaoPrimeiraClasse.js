//Função em JS é first-class order. JS considera função um tipo de dado

//criar de forma literal
function fun1(){
    //As chaves são OBRIGATÓRIAS, mesmo se tiver uma sentença só. A não ser que seja arrow function
}

//armazenar numa variável
const fun2 = function(){

}

//armazenar num array
const array = [function(a,b){return a + b}, fun1, fun2]
console.log(array[0](2,3))

//armazenar em um atributo de objeto
const obj = {}
obj.falar = function(){return 'Opa'}
console.log(obj.falar())

//passar função como parâmetro
function run(fun){
    fun()
}

run(function(){console.log('Executando')})

//uma função pode retornar/conter uma função
function soma(a,b){
    return function(c){
        console.log(a+b+c)
    }
}
soma(2,3)(4) //é identico a:
const somam = soma(2,3)
somam(4)