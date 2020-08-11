let dobro = function(a){
    return 2*a
}

dobro = (a) => {
    return 2*a
}

//função arrow é sempre anônima

dobro = a => 2*a //sem {} tem retorno implícito

console.log(dobro(Math.PI))

let ola = function(){
    return 'olá'
}

ola = () => 'olá'
ola = x => 'olá' //parâmetro único que será ignorado
console.log(ola())