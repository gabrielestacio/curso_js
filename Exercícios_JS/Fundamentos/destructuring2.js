const [a] = [10]
console.log(a)

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8] //n2 e n4 foram ignorados, portanto, 7 e 8 também foram
console.log(n1,n3,n5,n6)

const [ ,[ , nota]] = [[ , 8, 8], [9, 6, 8]] //array de array, matriz e tals... não é muito útil na prática. é melhor acessar pelo índice.
console.log(nota)