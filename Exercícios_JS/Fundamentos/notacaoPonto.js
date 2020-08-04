console.log(Math.ceil(6.1))

const obj1 = {}
obj1.nome = 'Bola'
//obj1['nome'] = 'Bola' (linha identica a de cima)
console.log(obj1.nome)

function Obj(nome){
    this.nome = nome //o this faz com que a variável fique visível pro escopo fora da função também
    this.exec = function(){
        console.log('Exec...')
    }
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()