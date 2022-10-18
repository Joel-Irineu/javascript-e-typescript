// false, 0, '', "", null, undefined e NaN -> retornam false (FALSY)

function falaOi(){
    return 'Oi';
}

let vaiExecutar = false;

console.log(vaiExecutar && falaOi());

const corUsuario = 'Vermelho';
const corPadrao = corUsuario || 'Preto';
console.log(corPadrao);