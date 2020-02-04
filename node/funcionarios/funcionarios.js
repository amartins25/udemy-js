const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

axios.get(url).then(response => {
    const funcionarios = response.data
    console.log(funcionarios)
})




// const caro = produto => produto.preco >= 500
// const fragil = produto => produto.fragil

// console.log(produtos.filter(caro).filter(fragil))