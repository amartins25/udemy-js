let num1 = 1
let num2 = 2

num1++
console.log(num1)
--num1
console.log(num1)

// Operador Ternário

// Função Arrow, após a seta, retorna uma expressão  relacional
const resultado = nota => nota > 7 ? 'Aprovado' : 'Reprovado' // Pode ser usado o If e Else na função

console.log(resultado(7.1))
console.log(resultado(6.7))

const status = nota > 7 ? 'Aprovado' : 'Reprovado'

