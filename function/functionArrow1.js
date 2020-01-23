let dobro = function (a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

// Implícita - Função de apenas uma linha
dobro = (a) => 2 * a 
console.log(dobro(Math.PI))

let ola = function () {
    return 'Olá'
}

ola = () => 'Olá'

ola = _ => 'Olá' // Possui um parâmetro
console.log(ola())