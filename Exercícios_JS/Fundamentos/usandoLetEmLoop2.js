const funcs = []

for (let i = 0; i<10; i++){
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2]()
funcs[8]()

//o escopo de bloco faz funcionar a memória de que cada repetição indica um valor pra o índice correspondente, enquanto com var isso não era possível, logo, todos os índices recebiam o valor que fazia a parada.
//isso vai ficar mais claro na seção de funções
//https://www.udemy.com/course/curso-web/learn/lecture/8778066#questions/11184511 essa explicação deixa mais claro o porquê de funcionar com let e não com var
//basicamente, é porque var i vai continuar existindo fora do loop, então sempre que eu chamar a função, ela vai executar considerando i = 10 e substituir o que foi feito dentro do loop.
//já com o let, i não existe fora do loop, entãõ quando eu chamar a função, ela vai respeitar o que foi feito dentro do loop.
S