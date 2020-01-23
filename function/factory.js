// Função que retorna um objeto, ela fabricar uma instancia de um objeto

// Factory Simples
function criarPessoa() {
    return {
        nome: "Ana",
        sobrenome: "Silva"
    }
   
}

console.log(criarPessoa())