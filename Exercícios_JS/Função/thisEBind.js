const pessoa = {
    saudacao: 'Bom dia!',
    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar()

const falar = pessoa.falar
falar() //conflito entre programação funcional e poo

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()
//bind vai amarrar um objeto ao this