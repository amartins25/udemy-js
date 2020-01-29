const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de lápis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
]

// Retornar um array com apenas os preços.

// Usar dois métodos para resolver esse problema

const paraObjeto = json => JSON.parse(json) // transformar as strings em objeto
const apenasPreco = produto => produto.preco // Receber um objeto de entrada e dizer que quero somente o preço

const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)

