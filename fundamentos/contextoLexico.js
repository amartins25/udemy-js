const valor = 'Global'

function minhaFuncao () {
    console.log(valor)
}

function exec () {
    const valor = 'Local'
    minhaFuncao()
}

exec()


// Contexto Léxico -  dentro da função.