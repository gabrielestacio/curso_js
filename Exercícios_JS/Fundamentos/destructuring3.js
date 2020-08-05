function rand({min = 0, max = 1000}){ //esses são os valores padrão
    const valor = Math.random()*(max-min) + min
    return Math.floor(valor)
}

const obj = {max: 50, min: 40}
console.log(rand(obj))
console.log(rand({max: 60, min: 30}))
console.log(rand({min: 920})) //vai usar o máximo padrão
console.log(rand({})) //vai usar os valores padrão
