const data = new Date('2022-02-21 12:00:03  ');
console.log(data.toString());

console.log('Dia', data.getDate());
console.log('Mês', data.getMonth()); // Começa do zero
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Seg', data.getSeconds());
console.log('ms', data.getMilliseconds());
console.log('Dia Semana', data.getDay()); // começa do zero
console.log(data.toString());
console.log(Date.now()); // milesimos de segundo desde o marco zero até agora

function zeroAEsquerda(num){
    return num >= 10 ? num : `0${num}`;
}

function formataData (data){
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());
    
    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}
const newDate = new Date();
const dataBrasil = formataData(newDate);
console.log(dataBrasil);