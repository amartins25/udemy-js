// //funcao sem retorno

// function imprimirSoma(a, b) {
// console.log(a + b)
// }

// imprimirSoma(2, 3)
// imprimirSoma(2)
// imprimirSoma(2, 10, 4, 5, 6, 7)
// imprimirSoma()

// //função sem retorno
// function soma(a, b =1 ) {
//     return a + b
// }

// console.log(soma(2, 3))
// console.log(soma(2))

// armazenando uma função dentro de uma variável
const imprimirSoma = function(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)

//armazenando uma função arrow em uma variável - arrow é uma função simplificada "=>"
const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 3))

//retorno implicito
const subtracao = (a, b) => a - b
console.log(subtracao(2, 3))

