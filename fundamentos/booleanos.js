let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

isAtivo = 1; // o valor se comporta como verdadeiro, se fizer negação 2 vezes.
console.log(!!isAtivo); //verificando se a vsriavel é verdadeiro ou falso => !! signifia o não não = true

console.log('os verdadeiros...'); //situações que retornam verdadeir o;
console.log(!!3) //forçando uma conversão para verdadeiro.
console.log(!!-1);
console.log(!!' ');
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isAtivo = true));

console.log('os falsos...'); //situações que retornam falso;
console.log(!!0);
console.log(!!'');
console.log(!!null);
console.log(!!NaN);
console.log(undefined);
console.log(!!(isAtivo = false)); //como o resultado é falso ele mostra sempre o falso
console.log(!!('' || null || 0 || ' ' ));


let nome = 'Lucas'

console.log(nome || 'Desconhecido');