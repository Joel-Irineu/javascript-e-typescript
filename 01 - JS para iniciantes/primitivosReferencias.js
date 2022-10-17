/**
* Primitivos (imutáveis) - string, number, boolean, undefined, null
* Referencia (mutável) - array, object, function
*/


let a = 'A';
let b = a;
a = 'C';
console.log(a, b);

a = [1,2,3];
b = a;
console.log(a, b);

a.push(4);
console.log(a,b);

// Quando é um valor primitivo vc faz uma copia, quando não é, vc faz uma referencia