const escola = "Cod3r";

console.log(escola.charAt(4)); //seleciona apenas o caractere selecionado
console.log(escola.charCodeAt(3)); // significa que o 3 em código tem o valo mostrado//
console.log(escola.indexOf('3')); //imprime apenas o caractere selecionado

console.log(escola.substring(1)); //começa a partir do segundo caractere
console.log(escola.substring(0, 3)); //começa do 0, mas não termina no 3

console.log('Escola '.concat(escola).concat("!")) ; //concatena os dois parametros. pode usar o + no lucar do concat

console.log(escola.replace(3, 'e')); //se eu usar (/\3/, 3) todos numerais são trocados po e.

console.log('Ana,Maria, Pedro'.split(',')); //divide os objetos a partir da ,