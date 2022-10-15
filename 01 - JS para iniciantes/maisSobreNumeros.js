let num1 = 10; // number
let num2 = 2.498545245124; // number

console.log(num1.toString() + num2); 
console.log(typeof num1); //Retorna number
console.log(typeof num1.toString()); // Retorna String
// num1 continua sendo numero, porem ele retorna como string (valor temporario).

num1 = num1.toString(); // Aqui ele passa a ser number
console.log(typeof num1); //Retorna string

num1 = parseInt(num1); // Recebe o valor de num1 como number int
console.log(typeof num1); //Retorna number

console.log(num1.toString(2)); // Rerorna string em hexadecimal

console.log(num2.toFixed(2)); // Retorna number float com 2 casas decimais

console.log(Number.isInteger(num1)); // Retorna um boolean se o number é int


let temp = num1 * 'Olá';
console.log(temp); // Ira retornar NaN
console.log(Number.isNaN(temp)); // Retorna um boolean se o number for NaN

num1 = 0.7;
num2 = 0.1;

num1 += num2; // 0.8
num1 += num2; // 0.9
num1 += num2; // 1.0
console.log(num1);  // Não retorna com exatidão

num1 = parseFloat(num1.toFixed(2)); // Resolve o problema
console.log(num1);
console.log(Number.isInteger(num1)); //Retorna um boolean se o number for integer

num1 = 0.7;
num2 = 0.1;

num1 = ((num1 * 100) + (num2 * 100)) / 100; //resolve a imprecisão
console.log(num1);