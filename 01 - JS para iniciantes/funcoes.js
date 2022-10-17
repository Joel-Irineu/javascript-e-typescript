function saudacao(nome){
    return `bom dia, ${nome}!`;
} // cria uma função 

console.log(saudacao('irineu'));
console.log(saudacao('João'));

const variavel = saudacao('Joel');
console.log(variavel);

function soma(x = 1, y = 1){
    const resultado = x + y;
    return resultado;
} // função com propriedades, se quiser um valor padrão, podemos atribuir

console.log(soma(3, 2));
console.log(soma(7, 7));
console.log(soma());

let raiz = function(n){
    return n ** 0.5;
}; // Função anonima

console.log(raiz(9));

let sub = (x, y) => {
    return x - y;
}; // Arrow Function

console.log(sub(4,2));