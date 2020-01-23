// herança é capacidade da OO que faz com que receba atributos e comportamentos do "pai", com a idéia de reproveitar código.

// Tiver que escolher entre herança e composição, priorize composição por ser mais flexivel, herança so pode herdar de uma classe pai

const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

console.log(ferrari.__proto__)