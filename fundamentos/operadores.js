//operadores racionais, lógicos, sempre serão operações binárias.
const [a, b, c, d] = [3, 5, 1, 15]

const soma = a + b + c + d
const subtracao = d - b
const multiplicacao = a * b
const divisao = d / a
const modulo = a % 2

console.log(soma, subtracao, multiplicacao, -divisao, modulo)

// Operadores Relacionais - 

console.log('01)', '1' == 1) // = é atribuição, == comparando duas variaveis, === verificando a tipagem
console.log('02)', '1' === 1)
console.log('03)', '3' != 3) //são iguais pq está verificando se tem valor
console.log('04)', '3' !== 3)
console.log('05)', 3 < 2)
console.log('06)', 3 > 2)
console.log('07)', 3 <=2)
console.log('08)', 3 >=2)

const d1 = new Date(0)
const d2 = new Date(0)

console.log('09)', d1 === d2)
console.log('10)', d1 == d2)
console.log('11)', d1.getTime() === d2)
console.log('12)', undefined == null)
console.log('13)', undefined === null)

// Operadores Lógicos - ex vou sair se tiver dinheiro ou nao estiver chovendo
 
// v e v = v / v e f = f / f e ? = f / v ou ? = v / f ou  ? = ? / f ou v = v / f ou f = f
// v xor v = f / v xor f = v / f xor v = v / f xor f = f
// !v = f / !f = v

// e ou  e negação

function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
   // const comprarTv32 = !!(trabalho1 ^ trabalho2) //bitwise xor exclusivo
   const comprarTv32 = trabalho1 != trabalho2
   const manterSuadavel = !comprarSorvete //operador unario

   return { comprarSorvete, comprarTv50, comprarTv32, manterSuadavel }
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))

// -- operadores unários





