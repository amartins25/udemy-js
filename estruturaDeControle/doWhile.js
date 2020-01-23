function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = -1

do {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opção escolhida foi ${opcap}.`)
} while (opcao != -1) // opção com do

// do while (opcao != -1) { Oção do While
//     opcao = getInteiroAleatorioEntre(-1, 10)
//     console.log(`Opção escolhida foi ${opcap}.`)
// }  // opção com do

console.log('Até a próxima!')