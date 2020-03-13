// Arrow Function
const soma = (a, b) => a + b

console.log(soma(2, 3))

// Arrow Function (this) this aponta para global e quando uso o bind eu aponto para a função específica
const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({})
lexico1()
lexico2()

// Paramêtro default
function log (texto = 'Node') {
    console.log(texto)
}

log()
log('Sou mais forte')

// Operador rest
function total(...numeros) {
    let total = 0
    numeros.forEach( n => total += n) // Atribuicao aditiva

    return total
}

console.log(total(2, 3, 4, 5))