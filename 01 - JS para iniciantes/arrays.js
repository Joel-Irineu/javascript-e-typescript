const alunos = ['luiz', 'Maria', 'João'];
console.log(alunos); // Retorna o array completo
console.log(alunos[1])// Retorna apenas o indice passado

alunos[0] = 'Andre'; // substitui o elemento
alunos[3] = 'Luiza'; // Adiciona um novo elemento pois 3 não existe
console.log(alunos);
console.log(alunos.length); // Retorna o tamanho do array

alunos.push('Otavio'); // Adiciona um elemento no final do array
alunos.unshift('Joel'); // Adiciona um elemento no inicio do array
console.log(alunos);

alunos.pop(); // remove um elemento do final do array
alunos.shift(); // remove um elemento do inicio do array
console.log(alunos);

console.log(alunos.slice(0, 2)); // retorna apenas a  parte selecionada do array
